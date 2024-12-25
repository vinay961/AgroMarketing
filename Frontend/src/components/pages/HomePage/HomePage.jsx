import React from 'react';
import Button from '../../common/Button/Button.jsx';

import './HomePage.css';


const Home = () => {
  const products = [
    {
      id: 1,
      productImage: 'https://via.placeholder.com/150',
      productName: 'Fresh Tomatoes',
      price: 50,
      category: 'Vegetables',
      productDesc: 'Fresh and organic tomatoes directly from farms.',
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/150',
      productName: 'Mangoes',
      price: 120,
      category: 'Fruits',
      productDesc: 'Juicy and sweet mangoes to brighten your day.',
    },
    {
      id: 3,
      productImage: 'https://via.placeholder.com/150',
      productName: 'Wheat',
      price: 40,
      category: 'Grains',
      productDesc: 'Premium quality wheat for daily use.',
    },
    {
      id: 4,
      productImage: 'https://via.placeholder.com/150',
      productName: 'Wheat',
      price: 50,
      category: 'Grains',
      productDesc: 'Premium quality wheat for daily use.',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Empowering Farmers, Connecting Markets</h1>
        <p>Sell your produce directly, learn about e-farming, and grow your business with ease.</p>
        <Button text={"Get Started"} />
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Locate Marketplaces</h3>
            <p>Find the best place to sell your products.</p>
          </div>
          <div className="feature">
            <h3>Manage Sales</h3>
            <p>Track and update your orders easily.</p>
          </div>
          <div className="feature">
            <h3>E-Farming Education</h3>
            <p>Learn how to enhance your farming practices.</p>
          </div>
          <div className="feature">
            <h3>Secure Transactions</h3>
            <p>Ensuring a safe and reliable marketplace.</p>
          </div>
        </div>
      </section>

      {/* Marketplace Preview Section */}
      <section className="marketplace-section">
        <h2>Explore Our Marketplace</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.productImage} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p className="price">{product.price}/- per kg</p>
              <p className="category">Category: {product.category}</p>
              <p className="description">{product.productDesc}</p>
              <button className="details-button">View Details</button>
              <button className="cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Farmers Say</h2>
        <blockquote>
          <p>"This platform has revolutionized the way I sell my crops. It's efficient and easy to use!"</p>
          <footer>- Shikhar Singh</footer>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
