import React, { useState } from "react";
import "./BusinessDetail.css";

const BusinessDetailsForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    location: "",
    contactNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to send formData to the backend
    console.log("Submitted Business Details:", formData);
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
            name="category"
            value={formData.category}
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
            name="location"
            value={formData.location}
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
            name="contactNumber"
            value={formData.contactNumber}
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
            name="email"
            value={formData.email}
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
