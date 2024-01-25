import React, { useContext } from 'react';
import { BsBagHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { fullStock } = useContext(CartContext);

  return (
    <Link to="/cart" className="nav-link-cart d-block p-2">
      <BsBagHeartFill style={{ width: '1.5rem', height: '1.5rem' }} />
      <span className="rounded-4 p-2">{fullStock()}</span>
    </Link>
  );
};

export default CartWidget;