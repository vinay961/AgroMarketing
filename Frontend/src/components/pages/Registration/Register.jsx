import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const RegisterPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [message, setMessage] = useState(null); 
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); 
    }
  }, [isLoggedIn, navigate]);

  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2100/users/register',{name,email,password},{
        header:{
          'Content-Type' : 'application/json'
        }
      })
      setMessage('Registration successful!');
      setMessageType('success');
      console.log("Login successful!", response.data);
      setTimeout(()=> navigate('/login'),1500)
    } catch (error) {
      setMessage('Registration failed!');
      setMessageType('error');
      console.error("Registration failed!", error.response?.data || error.message);
      setTimeout(()=>{setName('');setPassword(''); setEmail('');setMessage('');setMessageType('')},2000)
    }
  };

  return (
    <div className="register-container">
      {message && (
        <div className={`popup-message ${messageType}`}>
          {message}
        </div>
      )}
      <div className="register-card">
        <h1 className="register-title">Create Your Account</h1>
        <p className="register-subtitle">Join us to start your journey</p>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your full name" 
              required 
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Create a password" 
              required 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <div className="register-footer">
          <p>
            Already have an account?{' '}
            <span className="link" onClick={()=>navigate('/login')}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
