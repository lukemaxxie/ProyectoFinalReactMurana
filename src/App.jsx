import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import "./App.css";

import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import AppRouter from "./router/AppRouter";  // Correct the import statement

function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
