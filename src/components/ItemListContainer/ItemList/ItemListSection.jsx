import React from 'react';
import { useProducts } from '../../../hooks/useProducts'; // Replace 'path-to-your-useProducts' with the actual path to your useProducts hook
import { ItemCard } from "../../ItemCard/ItemCard";

export const ItemListSection = () => {
  const { products } = useProducts();

  return (
    <section id="sectionCatalogue" className="h-100 my-1 d-flex justify-content-center">
      <div className="container d-flex row justify-content-center">
        {products.length === 0
          ? <div className="custom-loader"></div>
          : products.map((elem) => <ItemCard key={elem.id} {...elem} />)}
      </div>
    </section>
  );
};
export default ItemListSection;
