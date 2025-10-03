import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const vaciarCarrito = () => {
    setCartItems([]);
  };

  // 🧩 Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const guardado = localStorage.getItem('carrito');
    if (guardado) {
      setCartItems(JSON.parse(guardado));
    }
  }, []);

  // 🧩 Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, cantidad) => {
    setCartItems(prev => {
      const existente = prev.find(p => p.id === product.id);
      if (existente) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        );
      } else {
        return [...prev, { ...product, cantidad }];
      }
    });
  };

  const updateQuantity = (id, nuevaCantidad) => {
    setCartItems(prev =>
      prev.map(p =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        vaciarCarrito,
        getTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };