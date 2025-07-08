import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../../../services/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Marketplace.css';

const ITEMS_PER_PAGE = 8;

const Marketplace = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sampleProducts, setSampleProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false); 
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate('/cart');
  };

  useEffect(() => {
    const handleProduct = async () => {
      setLoading(true); 
      try {
        const response = await axios.get('http://localhost:2100/product/getproducts', { withCredentials: true });
        console.log(response.data.data);
        setSampleProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); 
      }
    };

    handleProduct();
  }, []);

  const filteredProducts = sampleProducts.filter((product) => {
    const productName = product.name.toLowerCase();
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

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const totalItemsInCart = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

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

      {loading ? ( 
        <div className="loading-container">
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          <div className="marketplace-products">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div key={product._id} className="product-cards">
                  <img src={product.image} alt={product.productName} className="product-image" />
                  <h3 className="product-name">{toTitleCase(product.name)}</h3>
                  <p className="product-price"><span style={{color:"red"}} >₹ {product.price}</span> /-</p>
                  <p className="product-category">Category: {product.category.toUpperCase()}</p>
                  <button
                    onClick={() => navigate('/viewdetail')}
                    className="product-details-button"
                  >
                    View Details
                  </button>
                  <div className="product-cart-controls">
                    {cart[product._id] ? (
                      <div className="cart-controls">
                        <button
                          onClick={() => decrementQuantity(product._id)}
                          className="cart-button"
                        >
                          -
                        </button>
                        <span className="cart-quantity">{cart[product._id].quantity}</span>
                        <button
                          onClick={() => incrementQuantity(product._id)}
                          className="cart-button"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(product)} className="add-to-cart-button">
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

          <button onClick={handleViewCart} className="view-cart-button">
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
        </>
      )}
    </div>
  );
};

export default Marketplace;
