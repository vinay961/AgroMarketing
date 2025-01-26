import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProducts.css";

const UserProducts = () => {
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const fetchProduct = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        "http://localhost:2100/product/getuserproduct",
        { withCredentials: true }
      );
      setProduct(response.data.data);
    } catch (error) {
      console.error(
        "Product fetching failed!",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.delete(
        `http://localhost:2100/product/deleteproduct/${id}`,
        { withCredentials: true }
      );
      alert(response.data.message);
      setProduct((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error(
        "Product deletion failed!",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const updatedProduct = {
        ...currentProduct,
      };

      if (currentProduct.newImage) {
        const formData = new FormData();
        formData.append("name", updatedProduct.name);
        formData.append("category", updatedProduct.category);
        formData.append("image", currentProduct.newImage);

        const response = await axios.put(
          `http://localhost:2100/product/updateproduct/${currentProduct._id}`,
          formData,
          { withCredentials: true }
        );
        alert(response.data.message);
      } else {
        const response = await axios.put(
          `http://localhost:2100/product/updateproduct/${currentProduct._id}`,
          updatedProduct,
          { withCredentials: true }
        );
        alert(response.data.message);
      }

      setProduct((prevProducts) =>
        prevProducts.map((p) =>
          p._id === currentProduct._id ? updatedProduct : p
        )
      );
      handleModalClose();
    } catch (error) {
      console.error(
        "Product update failed!",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleInputChange = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  function toTileCase(inputString) {
    return inputString
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="carousel-container">
      <h1 className="title">Your Products</h1>

      {loading ? ( // Display loading spinner or text
        <div className="loading-container">
          <div className="spinner"></div> {/* Add a spinner if needed */}
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="carousel">
            {product.map((p) => (
              <div key={p._id} className="carousel-card">
                <img src={p.image} alt={p.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{toTileCase(p.name)}</h3>
                  <p className="product-category">Category: {p.category}</p>
                  <p className="product-price">Price: ₹{p.price}</p>
                  <p className="product-quantity">Quantity: {p.quantity}</p>
                  <div className="product-actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleModalClose}>
                  &times;
                </span>
                <h2>Edit Product</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="modal-field">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={currentProduct.name}
                      onChange={handleInputChange}
                      placeholder="Enter product name"
                    />
                  </div>
                  <div className="modal-field">
                    <label>Category</label>
                    <input
                      type="text"
                      name="category"
                      value={currentProduct.category}
                      onChange={handleInputChange}
                      placeholder="Enter category"
                    />
                  </div>
                  <div className="modal-field">
                    <label>Product Image</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setCurrentProduct({ ...currentProduct, newImage: file });
                      }}
                    />
                  </div>
                  <div className="modal-actions">
                    <button type="submit" className="save-button">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={handleModalClose}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserProducts;
