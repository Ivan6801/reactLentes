import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.scss';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  function handleSumTotal() {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <img width={100} src={item.image} alt="" />
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button
              className="Checkout-button"
              type="button"
              onClick={handleRemove(item)}
            >
              <RiDeleteBack2Fill size={20} color="red" />
            </button>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
