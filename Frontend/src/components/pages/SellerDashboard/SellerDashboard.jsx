import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "Doe Farms",
    category: "Organic Vegetables",
    location: "Bangalore, India",
  });
  const [userDetails,setUserDetails] = useState({
    name:'John Doe',
    email:'johndoe@example.com',
    Phone:'+91 9876543210'
  })

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  useEffect(()=>{
    // fetching user business details
    const details = JSON.parse(localStorage.getItem('businessDetails'));
    setBusinessDetails({businessName:details.businessName,category:details.businessCategory,location:details.businessLocation})
    // fetching user details
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserDetails({name:user.name,email:user.email,Phone:'+91 9876543210'})

  },[])

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails({ ...businessDetails, [name]: value });
  };

  const handleSave = async() => {
    setIsEditing(false);
    try {
      const response = await axios.put("http://localhost:2100/business/editbusinessdetail", businessDetails , { withCredentials: true })
      console.log("Updated Business Details:", response);
    } catch (error) {
      console.log(error);
    }
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
          <h2>{toTitleCase(userDetails.name)}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.Phone}</p>
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
              <p>Business Name: <span style={{color:'green',fontFamily:'cursive'}}>{businessDetails.businessName}</span></p>
              <p>Category: <span style={{color:'green',fontFamily:'cursive'}}>{businessDetails.category}</span></p>
              <p>Location: <span style={{color:'green',fontFamily:'cursive'}}>{businessDetails.location}</span></p>
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
