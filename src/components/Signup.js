import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate successful signup
    setIsAuthenticated(true); // Update the authentication state
    navigate('/'); // Redirect to home
  };

  return (
    <div>
      <h2>Signup Page</h2>
      {/* Signup form goes here */}
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
