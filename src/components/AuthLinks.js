// import React, { useState } from 'react';
// import '../styles/AuthLinks.css';

// const AuthLinks = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleAuthClick = () => {
//     if (isAuthenticated) {
//       // Handle logout logic
//       setIsAuthenticated(false);
//     } else {
//       // Handle login/signup logic
//       // For simplicity, we're just toggling the state here
//       setIsAuthenticated(true);
//     }
//   };

//   return (
//     <div className="auth-links">
//       {isAuthenticated ? (
//         <span onClick={handleAuthClick} className="btn-light-custom">Logout</span>
//       ) : (
//         <>
//           <span onClick={handleAuthClick} className="btn-light-custom">Signup</span> 
//           <span className="separator"></span>
//            <span onClick={handleAuthClick} className="btn-light-custom">Login</span>
//         </>
//       )}
//     </div>
//   );
// };

// export default AuthLinks;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/AuthLinks.css';

// const AuthLinks = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogout = () => {
//     // Handle logout logic
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="auth-links">
//       {isAuthenticated ? (
//         <span onClick={handleLogout} className="btn-light-custom">Logout</span>
//       ) : (
//         <>
//           <Link to="/signup" className="btn-light-custom">Signup</Link>
//           <span className="separator"></span>
//           <Link to="/login" className="btn-light-custom">Login</Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default AuthLinks;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthLinks.css';

const AuthLinks = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="auth-links">
      {isAuthenticated ? (
        <span onClick={handleLogout} className="btn-light-custom">Logout</span>
      ) : (
        <>
          <Link to="/signup" className="btn-light-custom">Signup</Link>
          <span className="separator"></span>
          <Link to="/login" className="btn-light-custom">Login</Link>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
