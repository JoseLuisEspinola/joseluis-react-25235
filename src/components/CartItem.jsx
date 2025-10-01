import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartItem.css';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(item.cantidad);

  const modificar = () => {
    updateQuantity(item.id, cantidad);
  };

  const eliminar = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} className="cart-image" />

      <div className="cart-info">
        <h3 className="cart-name">{item.name}</h3>
        <p className="cart-price">Precio unitario: ${item.price}</p>
        <p className="cart-total">Total: ${item.price * item.cantidad}</p>

        <div className="cart-controls">
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            className="cart-input"
          />

          <button onClick={modificar} className="cart-button">
            📝 <span className="btn-text">Modificar</span>
          </button>

          <button onClick={eliminar} className="cart-button">
            🗑️ <span className="btn-text">Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
