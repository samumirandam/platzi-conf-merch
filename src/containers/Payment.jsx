import React from 'react';

import "../styles/components/Payment.css";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment__content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment__button">
          Boton de pago con Paypal
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;