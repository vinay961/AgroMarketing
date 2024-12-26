import React from 'react';
import './Login.css';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to access your account</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
          <p>
            Forgot Password? <a href="/reset">Reset it here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
