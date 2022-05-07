import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';
import menu from '../assets/icons/dashicons_menu.png';
import iconCart from '../assets/icons/akar-icons_shopping-bag.png';

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <img src={menu} alt="Menu" />
      <div></div>
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
