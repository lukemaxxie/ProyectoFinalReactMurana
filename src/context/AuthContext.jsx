// AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
        });
      } else {
        setUser({
          logged: false,
          email: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const login = (values) => {
    setUser({
      logged: true,
      email: values.email,
    });
  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    setUser({
      logged: false,
      email: null,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
