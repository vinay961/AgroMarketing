import React from "react";
import "./UserDashboard.css";

function UserDashboard() {
  const sampleUser = {
    name: "Tom Jerry",
    email: "tomjerry@example.com",
    phone: "+91 9876543210",
    profilePicture: "https://via.placeholder.com/150",
    orders: [
      { id: 1, item: "Wheat Seeds", date: "2024-01-15", status: "Delivered" },
      { id: 2, item: "Organic Fertilizer", date: "2024-01-10", status: "Pending" },
    ],
  };

  const handleLogout = () => {
    alert("User logged out");
  };

  const handleEditProfile = () => {
    alert("Edit Profile Clicked");
  };

  const viewOrders = () => {
    alert("Viewing Past Orders");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* User Profile Section */}
        <section className="profile-section">
          <div className="profile-header">
            <img
              src={sampleUser.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <h2 className="dashboard-title">Welcome, {sampleUser.name}</h2>
          </div>
          <div className="profile-details">
            <h3>Your Profile</h3>
            <p><strong>Name:</strong> {sampleUser.name}</p>
            <p><strong>Email:</strong> {sampleUser.email}</p>
            <p><strong>Phone:</strong> {sampleUser.phone}</p>
            <button className="btn edit-btn" onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>
        </section>

        {/* Past Orders Section */}
        <section className="orders-section">
          <h3>Past Orders</h3>
          <ul className="orders-list">
            {sampleUser.orders.map((order) => (
              <li key={order.id} className="order-item">
                <p><strong>Item:</strong> {order.item}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </li>
            ))}
          </ul>
          <button className="btn view-orders-btn" onClick={viewOrders}>
            View All Orders
          </button>
        </section>

        {/* Extra Features Section */}
        <section className="extra-features-section">
          <h3>Explore More</h3>
          <ul>
            <li><a href="/learn">Learn About Agro Practices</a></li>
            <li><a href="/news">Latest Agricultural News</a></li>
            <li><a href="/support">Customer Support</a></li>
          </ul>
        </section>

        {/* Logout Button */}
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
