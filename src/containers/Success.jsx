import React from 'react';
import '../styles/components/Success.scss';

function Success() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="Success">
        <div className="Success-content">
          <h2>Oscar, Gracias por tu compra</h2>
          <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
          <div className="Success-map">Google Maps</div>
        </div>
      </div>
    </>
  );
}

export default Success;
