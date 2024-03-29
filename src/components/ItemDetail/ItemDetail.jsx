import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import SelectSize from '../SelectSize/SelectSize';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({
  id,
  nombre,
  precio,
  category,
  descripcion,
  img,
  stock,
  sizes,
  init = 1,
}) => {
  const [count, setCount] = useState(init);
  const [size, setSize] = useState(null);
  const { addCart, isInCart } = useContext(CartContext);
  const navigate = useNavigate(); // Use useNavigate instead of history

  const handleAggregate = () => {
    const item = {
      id,
      nombre,
      precio,
      category,
      descripcion,
      img,
      stock,
      count,
      size,
    };

    addCart(item);
  };

  const handlerBack = () => {
    navigate(-1); // Use navigate(-1) to go back
  };

  return (
    <Card className="cardItems m-5 p-4 " style={{ width: '90rem' }}>
      <div className="row g-0">
        <div className="col-md-4 w-25">
          <Card.Img src={img} className="col " />
        </div>
        <div className="col-md-8  ms-5 ">
          <Card.Body className="col">
            <Card.Title className="fw-bold">{nombre}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text className="fs-4"> ${precio}</Card.Text>
            <hr />
            {sizes && sizes.length > 0 && sizes[0].value !== null && (
              <SelectSize setSize={setSize} options={sizes} />
            )}

            {isInCart(id) ? (
              <Link to="/cart">
                <Button className="btn button-primary mt-4">Terminar compra</Button>
              </Link>
            ) : (
              <ItemCount
                max={stock}
                counter={count}
                setCounter={setCount}
                handleAggregate={handleAggregate}
              />
            )}

            <hr />
            <Button className="btn button-primary mt-2" onClick={handlerBack}>
              Volver
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export { ItemDetail };
