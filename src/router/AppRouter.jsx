import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

import { NavBar } from '../components/NavBar/Navbar';
import {ItemFrontPage} from '../components/ItemListContainer/ItemFrontPage';
import  ItemListContainerMain  from '../components/ItemListContainer/ItemListContainerMain';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Page404 from '../components/404/Page404';
import { Footer } from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { useContext } from 'react';
import CatalogoTodos from '../components/Catalogue/CatalogoTodos';
import { RegisterScreen } from '../components/LoginScreen/RegisterScreen';
const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ItemFrontPage />} />
        </Route>
        <Route path="/catalogo/:categoryId" element={<ItemListContainerMain />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route
          path="/login"
          element={user.logged ? <Navigate to="/" /> : <LoginScreen />}
        />
        <Route
          path="/register"
          element={user.logged ? <Navigate to="/" /> : <RegisterScreen />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
