import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "./BusinessDetail.css";


const BusinessDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    businessCategory: "",
    businessLocation: "",
    contact: "",
    businessEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2100/business/registerbusiness', formData, {withCredentials:true});
      if (response.status === 201) { 
        console.log("Business registered successfully:", response);
        setTimeout(() => navigate('/sellerhome'), 1000);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      if (error.response) {
        console.error("Backend responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the backend:", error.request);
      } else {
        console.error("Error in request setup:", error.message);
      }
    }
  };  

  return (
    <div className="business-details-form-container">
      <h1 className="business-details-form-header">Add Business Details</h1>
      <form className="business-details-form" onSubmit={handleSubmit}>
        <div className="business-form-group">
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            placeholder="Enter your business name"
            required
          />
        </div>

        <div className="business-form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleInputChange}
            placeholder="e.g., Organic Vegetables"
            required
          />
        </div>

        <div className="business-form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="businessLocation"
            value={formData.businessLocation}
            onChange={handleInputChange}
            placeholder="e.g., Bangalore, India"
            required
          />
        </div>

        <div className="business-form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="e.g., +91 9876543210"
            required
          />
        </div>

        <div className="business-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className="business-details-submit-btn">
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default BusinessDetailsForm;
