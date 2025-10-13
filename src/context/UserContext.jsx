import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🧩 Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const id = localStorage.getItem('userID');
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    if (id && role) {
      setUser({ id, role, name });
    }
  }, []);

  // Función para login
  const login = ({ id, role, name }) => {
    localStorage.setItem('userID', id);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', name);
    setUser({ id, role, name });
  };

  // Función para logout
  const logout = () => {
    localStorage.removeItem('userID');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    setUser(null);
  };

  const isLogged = !!user;

  return (
    <UserContext.Provider value={{ user, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
