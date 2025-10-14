import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Carrito from './pages/Carrito';
import ProductAdmin from './pages/ProductAdmin';
import Home from './pages/Home';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';
import './app.css';
import Login from './pages/Login';
import NoAutorizado from './pages/NoAutorizado';
import ProductDetail from './pages/ProductDetail';

function App() {
  const cartCount = 0; // temporal, luego vendrá del contexto

  return (
    <Router>
      <main style={styles.app}>
        <Navbar cartCount={cartCount} />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Productos: acceso libre, lógica interna decide qué mostrar */}
          <Route path="/productos" element={<Products />} />

          {/* Detalle de producto: acceso libre */}
          <Route path="/producto/:id" element={<ProductDetail />} /> {/* 👈 nueva ruta agregar esta linea en el nuevo proyecto*/}

          {/* Carrito: solo client, vendedor, admin */}
          <Route
            path="/carrito"
            element={
              <PrivateRoute allowedRoles={['client', 'vendedor', 'admin']}>
                <Carrito />
              </PrivateRoute>
            }
          />

          {/* Admin de productos: solo admin */}
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={['admin', 'vendedor']}>
                <ProductAdmin />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path='/no-autorizado' element={<NoAutorizado />} />
          {/* más rutas aquí */}
        </Routes>
        <Footer />
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
