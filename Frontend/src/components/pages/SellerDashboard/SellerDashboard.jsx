import React, { useState } from "react";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "Doe Farms",
    category: "Organic Vegetables",
    location: "Bangalore, India",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails({ ...businessDetails, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add functionality to save updated details to the backend if needed
    console.log("Updated Business Details:", businessDetails);
  };

  return (
    <div className="seller_profile-container">
      <h1 className="seller_profile-header">My Profile</h1>
      <div className="seller_profile-details">
        <div className="seller_profile-left">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="seller_profile-picture"
          />
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +91 9876543210</p>
          <button className="seller-edit-profile-btn">Edit Profile</button>
        </div>

        <div className="seller-profile-right">
          <h3>
            Business Details
            {!isEditing && (
              <button
                className="edit-business-btn"
                onClick={handleEditToggle}
              >
                Edit
              </button>
            )}
          </h3>

          {!isEditing ? (
            <div>
              <p>Business Name: {businessDetails.businessName}</p>
              <p>Category: {businessDetails.category}</p>
              <p>Location: {businessDetails.location}</p>
            </div>
          ) : (
            <div>
              <div className="edit-field">
                <label>Business Name:</label>
                <input
                  type="text"
                  name="businessName"
                  value={businessDetails.businessName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="edit-field">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={businessDetails.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="edit-field">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={businessDetails.location}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="save-business-btn"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          )}

          <h3>Quick Links</h3>
          <button className="profile-btn">View Pending Orders</button>
          <button className="profile-btn">View Order History</button>
          <button className="profile-btn">Manage Products</button>

          <h3>Account Settings</h3>
          <button className="change-password-btn">Change Password</button>
          <button className="seller-logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
