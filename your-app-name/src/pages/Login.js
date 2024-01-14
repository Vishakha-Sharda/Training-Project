import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn } = useAuth();
  const [userType, setUserType] = useState('patient');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve user data array from local storage under the key 'key'
    const userDataArray = JSON.parse(localStorage.getItem('key'));
//if there is no userdata or nodata in array then displat the error message 
    if (!userDataArray || !Array.isArray(userDataArray)) {
      setError("No user data found. Please sign up first.");
      return;
    }
// Find the user with matching credentials in the array
 const user = userDataArray.find(
      (user) =>
        user.email === email &&
        user.password === password 
    );
    //if is the authenticate user i.e credentials match then  
  if (user) {
     // Store login status in local storage
      localStorage.setItem('isLoggedIn', JSON.stringify(user));
      alert("Login successful!");
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      setError("Incorrect email, password, or user type");
    }
  };

  return (
    <div className="login-app">
      <div className="modal open">
        <div className="modal-content">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>   
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
     
    
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Login</button>
            <Link to="/signup">Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

