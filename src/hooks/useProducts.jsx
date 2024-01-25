import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from '../../firebaseConfig';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(dataBase, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(items);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return {
    products,
  };
};
