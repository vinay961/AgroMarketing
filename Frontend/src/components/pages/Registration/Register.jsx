import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegisterPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to the home page if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here (e.g., API call)
    console.log('User registered');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Create Your Account</h1>
        <p className="register-subtitle">Join us to start your journey</p>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <div className="register-footer">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
