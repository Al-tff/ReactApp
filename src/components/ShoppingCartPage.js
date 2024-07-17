import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cartItems, onIncrease, onDecrease, onDelete }) => {
  const getTotalItems = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalCost = () => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <p>Total Plants: {getTotalItems()}</p>
        <p>Total Cost: ${getTotalCost()}</p>
      </div>

      <div className="cart-buttons">
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={process.env.PUBLIC_URL + '/images/' + item.thumbnail} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="item-buttons">
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onDecrease(item.id)}>-</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ShoppingCartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingCartPage;
