/* import { Link } from 'react-router-dom';
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

export default Navbar; */


import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import './Navbar.css';

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate('/'); // '/login' si es que lo prefiero, pero lo dejo asi.
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Ecommerce Store</div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/admin">Gestión</Link></li>
        <li className='separator'></li>

        {user ? (
          <li>
            <span
              className="logout-link"
              title="Cerrar sesión"
              onClick={cerrarSesion}
              style={{ cursor: 'pointer' }}
            >
              🔓
            </span>
          </li>
        ) : (
          <li>
            <Link to="/login" className="login-link" title="Iniciar sesión">👤</Link>
          </li>
        )}

        <li>
          <Link to="/carrito" className="cart-link" title="Carrito">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
