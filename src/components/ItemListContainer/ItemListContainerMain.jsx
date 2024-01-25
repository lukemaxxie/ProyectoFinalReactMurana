// ItemListContainerMain.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import  {ItemFrontPage}  from './ItemFrontPage';
import { useProducts } from '../../hooks/useProducts';
import { Nav } from 'react-bootstrap';

// Import your catalog components
import CatalogoTodos from '../Catalogue/CatalogoTodos';
import CatalogoMusicalizacion from '../Catalogue/CatalogoMusicalizacion';
import CatalogoLunch from '../Catalogue/CatalogoServicioDeLunch';
import CatalogoDecoracion from '../Catalogue/CatalogoDecoracion';
import CatalogoPresupuesto from '../Catalogue/CatalogoPresupuesto';
import ItemListSection from './ItemList/ItemListSection';

const ItemListContainerMain = () => {
  const { products } = useProducts();

  return (
    <main className="container-fluid p-0">
      <ItemFrontPage products={products} />
      <Nav className="justify-content-center">
     
      </Nav>

      {/* Use Switch to manage routes */}
      <Routes>
        <Route path="/catalogo/todos" element={<CatalogoTodos />} />
        <Route path="/catalogo/musicalizacion" element={<CatalogoMusicalizacion />} />
        <Route path="/catalogo/lunch" element={<CatalogoLunch />} />
        <Route path="/catalogo/decoracion" element={<CatalogoDecoracion />} />
        <Route path="/catalogo/presupuesto" element={<CatalogoPresupuesto />} />
      </Routes>

      {/* You can keep the ItemListSection component to display the products */}
      <ItemListSection />
    </main>
  );
};

export default ItemListContainerMain;
