// CartContext.jsx
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotalPurchase = () =>
    cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0);

  const isInCart = (id) => cart.find((prod) => prod.id === id);

  const emptyCart = () => setCart([]);

  const deleteCart = (id) => setCart(cart.filter((prod) => prod.id !== id));

  const calculateTotalStock = () => cart.reduce((acc, prod) => acc + prod.count, 0);

  const fullStock = () => calculateTotalStock(); // Add this function

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        isInCart,
        calculateTotalPurchase,
        emptyCart,
        deleteCart,
        calculateTotalStock,
        fullStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
