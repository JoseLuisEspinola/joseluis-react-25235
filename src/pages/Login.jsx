import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(UserContext);

  const redirigido = location.state?.desdeProtegida;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://68d5b9bae29051d1c0af67db.mockapi.io/users');
      const data = await res.json();
      const user = data.find(u => u.email === email && u.password === password);

      if (user) {
        login({ id: user.id, role: user.role, name: user.name });
        const destino = redirigido || '/';
        navigate(destino, { replace: true });
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      {redirigido && (
        <p style={styles.aviso}>
          Debés iniciar sesión para acceder a esa sección.
        </p>
      )}

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ingresar</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100vh',  // lo agrego para ver si bajo el footer
    textAlign: 'center',
  },
  aviso: {
    color: '#d32f2f',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: '#d32f2f',
    marginTop: '1rem',
  },
};

export default Login;
