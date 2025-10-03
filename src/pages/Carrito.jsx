import { useContext } from 'react';
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

export default Carrito;