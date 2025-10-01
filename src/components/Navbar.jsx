import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-title">Ecommerce</div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/admin">Gestión</Link></li>
        <li className='separator'></li>
        <li><Link to="/logout" className="logout-link" title="Cerrar sesión">🔓 </Link></li>
        <li><Link to="/login" className="login-link" title="Iniciar sesión">👤 </Link></li>
        <li><Link to="/carrito" className="cart-link" title="Carrito">🛒 <span className="cart-count">{cartCount}</span></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
