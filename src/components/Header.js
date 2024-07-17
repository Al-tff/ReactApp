import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart <span className="cart-count">{cartItemCount}</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default Header;
