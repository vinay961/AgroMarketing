import React from "react";
import "./UserProducts.css";

const UserProducts = () => {
  const products = [
    { id: 1, name: "Fresh Strawberries", category: "Fruits", price: 250, quantity: 40, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Organic Spinach", category: "Vegetables", price: 80, quantity: 100, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Golden Bananas", category: "Fruits", price: 50, quantity: 120, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Tomatoes", category: "Vegetables", price: 30, quantity: 200, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Blueberries", category: "Fruits", price: 300, quantity: 50, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Carrots", category: "Vegetables", price: 40, quantity: 150, image: "https://via.placeholder.com/150" },
  ];

  const handleEdit = (id) => {
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete product with id: ${id}`);
  };

  return (
    <div className="carousel-container">
      <h1 className="title">Your Products</h1>
      <div className="carousel">
        {products.map((product) => (
          <div key={product.id} className="carousel-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-price">Price: ₹{product.price}</p>
              <p className="product-quantity">Quantity: {product.quantity}</p>
              <div className="product-actions">
                <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;
