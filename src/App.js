import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import AuthLinks from './components/AuthLinks';
import Slider from './components/Slider';
import AdvanceSearch from './components/AdvanceSearch';
import PropertyTypes from './components/PropertyTypes';
import PropertyListing from './components/PropertyListing';
import Service from './components/Service';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
// import About from './components/About'; 
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <AuthLinks isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={
            <>
              <CustomNavbar />
              <Slider />
              <AdvanceSearch />
              <PropertyTypes />
              <PropertyListing />
              <Service />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
