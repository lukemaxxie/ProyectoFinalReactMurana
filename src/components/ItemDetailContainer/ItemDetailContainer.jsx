import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const itemRef = doc(dataBase, "products", itemId);
    
    getDoc(itemRef)
      .then((doc) => {
        setItem({
          ...doc.data(),
          id: doc.id
        });
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="container h-100 my-5 d-flex justify-content-center">
      {loading ? (
        <div className="custom-loader my-5 "></div>
      ) : (
        <ItemDetail {...item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
