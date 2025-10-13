function NoAutorizado() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Acceso no autorizado</h1>
      <p style={styles.text}>
        No tenés permiso para acceder a esta sección.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#d32f2f',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default NoAutorizado;
