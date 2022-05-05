import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';

function Header() {
  const { state: { cart } } = useContext(AppContext);

  function handleSumTotal() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Conf Merch</Link>
      </h1>
      <div>
        {`Total: $ ${handleSumTotal()}`}
      </div>
      <div className="Header-checkout">
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        <Link to="/checkout">
          <BsFillCartFill size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
