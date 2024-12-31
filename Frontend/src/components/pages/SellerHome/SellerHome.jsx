import React from "react";
import "./SellerHome.css";
import { useNavigate } from "react-router-dom";

const SellerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="seller-home-container">
      <header className="seller-header">
        <h1>Welcome, Seller!</h1>
        <p>Manage your products, track your sales, and grow your business with us.</p>
      </header>

      <div className="seller-dashboard">
        <div className="dashboard-card" onClick={() => navigate("/addproduct")}>
          <img src="add-product-icon.png" alt="Add Product" />
          <h3>Add Products</h3>
          <p>Add new products to your inventory with ease.</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/manage-products")}>
          <img src="manage-products-icon.png" alt="Manage Products" />
          <h3>Manage Products</h3>
          <p>Edit or delete your listed products.</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/order-history")}>
          <img src="track-orders-icon.png" alt="Track Orders" />
          <h3>Track Orders</h3>
          <p>View and manage all your orders.</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/profile")}>
          <img src="profile-icon.png" alt="Profile" />
          <h3>Profile</h3>
          <p>Update your business profile details.</p>
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
