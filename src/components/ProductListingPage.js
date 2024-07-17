import React from 'react';
import PropTypes from 'prop-types';
import './ProductListingPage.css';

const ProductListingPage = ({ products, onAddToCart, cartItems }) => {
  const getCategoryPlants = (category) => products.filter(product => product.category === category);

  const isProductInCart = (productId) => cartItems.some(item => item.id === productId);

  return (
    <div className="product-listing-page">
      <h1>Plant Products</h1>

      <h2>Succulents</h2>
      <div className="plant-list">
        {getCategoryPlants('Succulents').map(product => (
          <div key={product.id} className="plant-item">
            <img src={process.env.PUBLIC_URL + '/images/' + product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => onAddToCart(product)} 
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <h2>Trees</h2>
      <div className="plant-list">
        {getCategoryPlants('Trees').map(product => (
          <div key={product.id} className="plant-item">
            <img src={process.env.PUBLIC_URL + '/images/' + product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => onAddToCart(product)} 
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <h2>Flowers</h2>
      <div className="plant-list">
        {getCategoryPlants('Flowers').map(product => (
          <div key={product.id} className="plant-item">
            <img src={process.env.PUBLIC_URL + '/images/' + product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => onAddToCart(product)} 
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <h2>Ferns</h2>
      <div className="plant-list">
        {getCategoryPlants('Ferns').map(product => (
          <div key={product.id} className="plant-item">
            <img src={process.env.PUBLIC_URL + '/images/' + product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => onAddToCart(product)} 
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductListingPage.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default ProductListingPage;
