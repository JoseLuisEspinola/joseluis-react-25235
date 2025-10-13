import { useState, useEffect } from 'react';
import ProductRow from '../components/ProductRow';
import ProductForm from '../components/ProductForm';

function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null); // null = no hay modal abierto

  const esEdicion = editing && typeof editing === 'object' && 'id' in editing;


  
  useEffect(() => {
    fetch('https://68d5b9bae29051d1c0af67db.mockapi.io/products')
      .then(res => res.json())
      .then(data => {
        const adaptados = data.map(p => ({
          id: p.id,
          image: p.image,
          name: p.name,
          price: p.price,
          stock: p.stock,
          active: p.active,
        }));
        setProducts(adaptados);
      })
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://68d5b9bae29051d1c0af67db.mockapi.io/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProducts(prev => prev.filter(p => p.id !== id));
      })
      .catch(err => console.error('Error al eliminar:', err));
  };

  const handleEdit = (product) => {
    setEditing(product);
  };

  const handleSave = (producto) => {
    const url = `https://68d5b9bae29051d1c0af67db.mockapi.io/products${producto.id ? `/${producto.id}` : ''}`;
    const method = producto.id ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    })
      .then(res => res.json())
      .then(data => {
        setProducts(prev => {
          if (producto.id) {
            return prev.map(p => (p.id === data.id ? data : p));
          } else {
            return [...prev, data];
          }
        });
        setEditing(null);
      })
      .catch(err => console.error('Error al guardar producto:', err));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestión de productos</h1>
      <button style={styles.addButton} onClick={() => setEditing({})}>
        Nuevo Producto
      </button>

      <div style={styles.grid}>
        {products.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {editing !== null && (
      <div style={styles.backdrop}>
        <div style={styles.modal}>
            {/* <h2>{editing?.id ? 'Modificar producto' : 'Agregar producto'}</h2> */}
            <h2>{esEdicion ? 'Modificar Producto 📝' : 'Nuevo Producto ✔️'}</h2>

            <ProductForm
              initialData={editing}
              onCancel={() => setEditing(null)}
              onSubmit={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  addButton: {
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '500px',
    zIndex: 100,
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 998,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },

  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },

  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
  },

  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
  },

  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },

  saveButton: {
    backgroundColor: '#2e7d32',
    color: 'white',
  },

  cancelButton: {
    backgroundColor: '#ccc',
    color: '#333',
  },

};

export default ProductAdmin;
