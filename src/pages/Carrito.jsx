/* import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Carrito() {
  const { cartItems, getTotal, vaciarCarrito } = useContext(CartContext);

  return (
    <div style={styles.container}>
      <h2>Tu carrito</h2>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div style={styles.total}>
            <strong>Total del carrito:</strong> ${getTotal()}
          </div>

          <button style={styles.botonVaciar} onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  total: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    textAlign: 'right',
  },
  botonVaciar: {
    marginTop: '1rem',
    padding: '0.8rem 1.2rem',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

export default Carrito; */



import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Carrito() {
  const { cartItems, getTotal, vaciarCarrito } = useContext(CartContext);
  const [compraGenerada, setCompraGenerada] = useState(false);

  const handleGenerarCompra = () => {
    setCompraGenerada(true);
    vaciarCarrito();  //Vacio el Carrito
    setTimeout(() => setCompraGenerada(false), 3000);  //visible x 3 segundos
  };

  return (
    <div style={styles.container}>
      <h2>Tu carrito</h2>

      {compraGenerada && (
        <div style={styles.cartel}>
          Gracias por su compra 🛒
        </div>
      )}

      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div style={styles.total}>
            <strong>Total del carrito:</strong> ${getTotal()}
          </div>

          <div style={styles.botones}>
            <button style={styles.botonVaciar} onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <button style={styles.botonCompra} onClick={handleGenerarCompra}>
              Generar la compra
            </button>
          </div>
        </>
      )}
    </div>
  );

};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  total: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    textAlign: 'right',
  },
  botonVaciar: {
    /* marginTop: '1rem', */
    padding: '0.8rem 1.2rem',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
  botones: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  botonCompra: {
    padding: '0.8rem 1.2rem',
    backgroundColor: '#137a18ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  cartel: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#c8e6c9',
    color: '#2e7d32',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default Carrito;
