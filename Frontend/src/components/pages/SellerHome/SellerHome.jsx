import React from "react";
import axios from 'axios';
import "./SellerHome.css";
import { useNavigate } from "react-router-dom";

const SellerHome = () => {
  const navigate = useNavigate();

const handleProfileAndForm = async () => {
  try {
    const response = await axios.get("http://localhost:2100/business/getbusinessdetail", { withCredentials: true });
    console.log(response);
    if (response.status == 200) {
      localStorage.setItem("businessDetails", JSON.stringify(response.data.data));
      navigate('/sellerprofile');
    }
  } catch (error) {
    console.log(error);
    navigate('/businessdetailform')
  }
};  
  return (
    <div className="seller-home-container">
      <header className="seller-header">
        <h1>Welcome, Seller!</h1>
        <p>Manage your products, track your sales, and grow your business with us.</p>
      </header>

      <div className="seller-dashboard">
        <div className="dashboard-card" onClick={() => navigate("/addproduct")}>
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-product-2489220-2086170.png" alt="Add Product" />
          <h3>Add Products</h3>
          <p>Add new products to your inventory with ease.</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/userproducts")}>
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/product-management-19-1146665.png" alt="user-product" />
          <h3>Manage Products</h3>
          <p>Edit or delete your listed products.</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/order-history")}>
          <img src="https://icon-library.com/images/track-order-icon/track-order-icon-18.jpg" alt="Track Orders" />
          <h3>Track Orders</h3>
          <p>View and manage all your orders.</p>
        </div>
        <div className="dashboard-card" onClick={() => handleProfileAndForm()}>
          <img src="https://logodix.com/logo/1984203.png" alt="Profile" />
          <h3>Profile</h3>
          <p>Create or Update your business profile details.</p>
        </div>
      </div>

      <footer className="seller-footer">
        <button className="logout-button" onClick={() => navigate("/logout")}>
          Log Out
        </button>
      </footer>
    </div>
  );
};

export default SellerHome;
