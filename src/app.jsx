import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Carrito from './pages/Carrito';
import ProductAdmin from './pages/ProductAdmin';
import Home from './pages/Home';
import './app.css';

function App() {
  const cartCount = 0; // temporal, luego vendrá del contexto

  return (
    <Router>
      <main style={styles.app}>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/admin" element={<ProductAdmin />} />
          <Route path="/carrito" element={<Carrito />} />
          {/* más rutas aqui. */}
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  app: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
};

export default App;


/* const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
}; */


