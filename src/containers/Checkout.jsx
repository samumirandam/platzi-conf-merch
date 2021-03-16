import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeToCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout__content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin Pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout__item" key={item.id}>
            <div className="Checkout__element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout__sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
