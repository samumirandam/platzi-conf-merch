import React from 'react';

import "../styles/components/Success.css";

const Success = () => {
  return (
    <div className="Success">
      <div className="Success__content">
        <h2>Samu, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 días a tu dirección:</span>
        <div className="Success__map">
          Google maps
        </div>
      </div>
    </div>
  );
}

export default Success;