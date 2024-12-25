import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Marketplace.css';

const ITEMS_PER_PAGE = 8;

const sampleProducts = [
  {
    _id: '1',
    productName: 'Fresh Apples',
    price: 120,
    category: 'Fruits',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '2',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '3',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '4',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '5',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '6',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '7',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '8',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '9',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    _id: '10',
    productName: 'Organic Carrots',
    price: 50,
    category: 'Vegetables',
    productImage: 'https://via.placeholder.com/150',
  },
  // Add more sample products as needed
];

const Marketplace = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState({});

  const navigate = useNavigate();

  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: prevCart[productId] + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const productName = product.productName.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      productName.includes(lowerCaseSearchTerm)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItemsInCart = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">Explore Our Marketplace</h1>

      <div className="marketplace-filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="marketplace-search"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="marketplace-select"
        >
          <option value="All">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <div className="marketplace-products">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product._id} className="product-cards">
              <img src={product.productImage} alt={product.productName} className="product-image" />
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">₹{product.price} /-</p>
              <p className="product-category">Category: {product.category.toUpperCase()}</p>
              <button
                onClick={() => navigate('/productdetails')}
                className="product-details-button"
              >
                View Details
              </button>
              <div className="product-cart-controls">
                {cart[product._id] ? (
                  <div className="cart-controls">
                    <button onClick={() => decrementQuantity(product._id)} className="cart-button">
                      -
                    </button>
                    <span className="cart-quantity">{cart[product._id]}</span>
                    <button onClick={() => incrementQuantity(product._id)} className="cart-button">
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product._id)}
                    className="add-to-cart-button"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-products-message">No products found</p>
        )}
      </div>

      <button
        onClick={handleViewCart}
        className="view-cart-button"
      >
        <FiShoppingCart />
        {totalItemsInCart > 0 ? ` View Cart (${totalItemsInCart})` : ' View Cart'}
      </button>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${
              currentPage === index + 1 ? 'active' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
