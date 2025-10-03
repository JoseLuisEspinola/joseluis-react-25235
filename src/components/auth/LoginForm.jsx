import { useState, useEffect } from 'react';

const usuariosMock = [
  { id: '1', nombre: 'Admin', email: 'admin@mail.com', contraseña: 'admin123', rol: 'admin', activo: true },
  { id: '2', nombre: 'Vendedor', email: 'venta@mail.com', contraseña: 'venta123', rol: 'vendedor', activo: true },
  { id: '3', nombre: 'Cliente', email: 'cliente@mail.com', contraseña: 'cliente123', rol: 'user', activo: true }
];

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  // Simulamos carga desde API
  useEffect(() => {
    // En el futuro: fetch desde MockAPI
    setUsuarios(usuariosMock);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = usuarios.find(
      u => u.email === email && u.contraseña === contraseña && u.activo
    );

    if (usuario) {
      onLogin({
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
        isAuthenticated: true
      });
    } else {
      alert('Credenciales inválidas o cuenta inactiva');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={e => setContraseña(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default LoginForm;