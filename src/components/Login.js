import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate successful login
    setIsAuthenticated(true); // Update the authentication state
    navigate('/'); // Redirect to home
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Login form goes here */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
