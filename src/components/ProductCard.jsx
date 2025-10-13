import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product, mostrarPrecio }) {
  const [cantidad, setCantidad] = useState(1);
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const sinStock = product.stock === 0;
  const deshabilitado = sinStock || !mostrarPrecio;

  const { addToCart } = useContext(CartContext);
  
  const agregarAlCarrito = () => {
    if (cantidad <= stockDisponible) {
      addToCart(product, cantidad);
      setStockDisponible(prev => prev - cantidad);
      setCantidad(1); // reinicio el input
    }
  };

  return (
    <div style={{ ...styles.card, opacity: sinStock ? 0.5 : 1 }}>
      <div style={styles.bloqueImagen}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
      </div>

      <div style={styles.bloqueTitulo}>
        <h2 style={styles.name}>{product.name}</h2>
      </div>

      {mostrarPrecio && (
        <div style={styles.bloquePrecio}>
          <p style={styles.price}>Precio: ${product.price}</p>
        </div>
      )}

      <div style={styles.bloqueStock}>
        <p style={styles.stock}>Stock disponible: {stockDisponible}</p>
      </div>

      <div style={styles.bloqueControles}>
        <div style={styles.controls}>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={cantidad}
            onChange={e => {
              const valor = Number(e.target.value);
              if (valor > stockDisponible) {
                setCantidad(stockDisponible);
              } else if (valor < 1) {
                setCantidad(1);
              } else {
                setCantidad(valor);
              }
            }}
            disabled={deshabilitado}
            style={styles.input}
          />
          <button
            onClick={agregarAlCarrito}
            disabled={deshabilitado}
            style={{
              ...styles.button,
              backgroundColor: deshabilitado ? '#999' : '#1a2b6d',
              cursor: deshabilitado ? 'not-allowed' : 'pointer',
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      <div style={styles.bloqueSinStock}>
        <p style={{ ...styles.sinStock, opacity: sinStock ? 1 : 0 }}>
          SIN STOCK
        </p>
      </div>
    </div>
  );
}



const styles = {
  card: {
    width: '250px',
    height: '400px',
    /* padding: '0.2rem', */
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '2px 2px 15px rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },

  // Bloques por porcentaje
  bloqueImagen: { height: '50%', width: '100%', overflow: 'hidden' },
  bloqueTitulo: { height: '17%', width: '100%', overflowY: 'auto' },
  bloquePrecio: { height: '8%', width: '100%', overflowY: 'auto' },
  bloqueStock: { height: '8%', width: '100%', padding: '0', overflowY: 'auto' },
  bloqueControles: { height: '11%', width: '100%', padding: '0', margin: '0' },
  bloqueSinStock: { height: '6%', width: '100%', padding: '0', margin: '0' },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'content',
    borderRadius: '4px',
    backgroundColor: '#eee',
    padding: '0',
  },
  name: {
    fontSize: '1.1rem',
    margin: 0,
    padding: '6px 16px',
    color: 'blue',
  },
  price: {
    fontWeight: 'bold',
    margin: 0,
    padding: '2px',
  },
  stock: {
    margin: 0,
    padding: '2px',
    color: 'grey',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4px',
    gap: '0.5rem',
  },
  input: {
    width: '40px',
    padding: '0.3rem',
    textAlign: 'center',
  },
  button: {
    padding: '0.3rem 0.6rem',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
  sinStock: {
    color: 'red',
    fontWeight: 'bold',
    transition: 'opacity 0.3s ease',
    margin: 0,
    padding: '2px',
  },
};

export default ProductCard;
