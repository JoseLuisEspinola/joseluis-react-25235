function Home() {
  return (
   <div style={styles.container}>
      <h1>Bienvenido</h1>
      <p>Usá el menú para navegar.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Home;
