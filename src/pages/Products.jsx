/* import { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { UserContext } from '../context/UserContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  const getProducts = async () => {
    const url = 'https://68d5b9bae29051d1c0af67db.mockapi.io/products';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error al obtener productos');
    return await res.json();
  };

  useEffect(() => {
    getProducts()
      .then(data => {
        const activos = data.filter(p => p.active); // solo los activos
        setProducts(activos);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Cargando productos...</p>;

  // Puede ver precios?
  const puedeVerPrecios = user && ['client', 'vendedor', 'admin'].includes(user.role);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Productos</h1>
      <div style={styles.flex}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            mostrarPrecio={puedeVerPrecios}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1a2b6d',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
  },
  loading: {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '1.2rem',
  },
};

export default Products;
 */


import { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { UserContext } from '../context/UserContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { user } = useContext(UserContext);

  const getProducts = async () => {
    const url = 'https://68d5b9bae29051d1c0af67db.mockapi.io/products';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error al obtener productos');
    return await res.json();
  };

  useEffect(() => {
    getProducts()
      .then(data => {
        const activos = data.filter(p => p.active);
        setProducts(activos);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Cargando productos...</p>;

  const puedeVerPrecios = user && ['client', 'vendedor', 'admin'].includes(user.role);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Productos</h1>
      <div style={styles.flex}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            mostrarPrecio={puedeVerPrecios}
            onClick={() => setProductoSeleccionado(product)} // 👈 evento para abrir modal
          />
        ))}
      </div>

      {productoSeleccionado && (
        <ProductDetailModal
          product={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1a2b6d',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
  },
  loading: {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '1.2rem',
  },
};

export default Products;
