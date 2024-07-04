import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container-fluid nav-bar ${isSticky ? 'sticky-top' : ''}`}>
      <Navbar expand="lg" variant="light" className=" py-1 px-4 my-3 custom-navbar">
        <Container>
          <Navbar.Brand href="index.html" className="d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: 30, height: 30 }} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto">
              <Nav.Link href="index.html" className="nav-item nav-link">Home</Nav.Link>
              <Nav.Link href="About" className="nav-item nav-link">About</Nav.Link>
              <NavDropdown title="Property" id="property-dropdown">
                <NavDropdown.Item href="property-list.html">Higher Property</NavDropdown.Item>
                <NavDropdown.Item href="property-type.html">Medium Property</NavDropdown.Item>
                <NavDropdown.Item href="property-agent.html">Lower Property</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.html" className="nav-item nav-link">Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button href="" className="btn-custom px-3 d-none d-lg-flex">Add Property</Button>
              <FontAwesomeIcon icon={faCircleUser} className="ms-3 profile-icon" style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
