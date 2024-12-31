import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); 
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "+91 9876543210",
  });

  const [orders] = useState([
    { id: 1, item: "Wheat Seeds", date: "2024-01-15", status: "Delivered" },
    { id: 2, item: "Organic Fertilizer", date: "2024-01-10", status: "Pending" },
  ]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        name: userInfo.name,
        email: userInfo.email,
      }));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        clearInterval(interval);
        navigate("/login");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async() => {
    try {
      const response = await axios.put("http://localhost:2100/users/edituser",profile,
      {
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
      if (response.status === 200 || response.status === 201) {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
          userInfo.name = profile.name;
          userInfo.email = profile.email;
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
        alert("Profile updated successfully!");
        console.log("Server response:", response.data);
      } else {
        alert("Failed to update profile. Please try again.");
      }
  
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      alert('Something went wrong!! Please try again after sometime')
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value }); 
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
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
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-picture"
            />
            <h2 className="dashboard-title">
              Welcome, {toTitleCase(profile.name)}
            </h2>
          </div>
          <div className="profile-details">
            <h3>Your Profile</h3>
            <p>
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                toTitleCase(profile.name)
              )}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                profile.email
              )}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="edit-input"
                  disabled
                />
              ) : (
                profile.phone
              )}
            </p>
            {isEditing ? (
              <div>
                <button className="btn save-btn" onClick={handleSaveProfile}>
                  Save
                </button>
                <button className="btn cancel-btn" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="btn edit-btn" onClick={handleEditProfile}>
                Edit Profile
              </button>
            )}
          </div>
        </section>

        {/* Past Orders Section */}
        <section className="orders-section">
          <h3>Past Orders</h3>
          <ul className="orders-list">
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <p>
                  <strong>Item:</strong> {order.item}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
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
            <li>
              <a href="/efarming">Learn About Agro Practices</a>
            </li>
            <li>
              <a href="/sellerhome">Grow your business with us</a>
            </li>
            <li>
              <a href="/contactus">Customer Support</a>
            </li>
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
