// ProductForm.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./ProductForm.css";

function ProductForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    desc: "",
    price: "",
    quantity: "",
  });

  const [image,setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const data = new FormData()
    data.append("name",formData.name)
    data.append("category",formData.category)
    data.append("desc",formData.desc)
    data.append("price",formData.price)
    data.append("quantity",formData.quantity)
    if(image){
      data.append("image",image)
    }

    try {
      const response = await axios.post("http://localhost:2100/product/addproduct",data,
        {
          header:{
            'Content-Type':'multipart/form-data'
          },
          withCredentials:true
        },        
      )
      console.log("Product Added Successfully:", response.data);
      alert("Product added successfully!");
      setTimeout(()=> navigate('/sellerhome'),1000)
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="seller-form-container">
      <div className="form-header">
        <h1>Add Your Product</h1>
        <p>Fill in the details below to list your product.</p>
      </div>
      <form className="seller-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter product category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            placeholder="Select Image"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
