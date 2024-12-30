import React,{useState} from 'react';
import axios from 'axios';
import './Login.css';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [message, setMessage] = useState(null); 
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {

      const response = await axios.post(
        'http://localhost:2100/users/login',
        {email,password},
        {
          header:{
            'Content-Type': 'application/json'
          },
          withCredentials:true
        }
      )

      localStorage.setItem("userInfo", JSON.stringify(response.data.data.loggedInUser))
      setMessage('Login successful!');
      setMessageType('success');
      console.log(response.data);
      setTimeout(()=> navigate('/userdashboard'),1500)

    } catch (error) {

      setMessage('Login failed!');
      setMessageType('error');
      console.error("Login failed!", error.response?.data || error.message);
      setTimeout(()=>{setPassword(''); setEmail('');setMessage('');setMessageType('')},2000)

    }
  }

  return (
    <div className="login-container">
      {message && (
        <div className={`popup-message ${messageType}`}>
          {message}
        </div>
      )}
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to access your account</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              value= {email}
              onChange= {(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
              value= {password}
              onChange= {(e)=> setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </p>
          <p>
            Forgot Password?{' '}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('/reset')}
            >
              Reset it here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
