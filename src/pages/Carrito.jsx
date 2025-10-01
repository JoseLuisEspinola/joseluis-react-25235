import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Carrito() {
  const { cartItems, getTotal } = useContext(CartContext);

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
};

export default Carrito;
