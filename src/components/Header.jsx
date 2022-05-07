import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';
import menu from '../assets/icons/dashicons_menu.png';

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);

  function handleSumTotal() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum; 
  }

  return (
    <header className="Header">
      <Link to="/">
        <img src={menu} alt="Menu" />
      </Link>
      <div>
        <h4>{`Precio Total: $ ${handleSumTotal()}`}</h4>
      </div>
      <div className="Header-checkout">
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        <Link to="/checkout">
          <AiOutlineShoppingCart size={30} color="black" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
