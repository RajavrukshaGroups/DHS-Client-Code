import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MemberPannel_Styles/MemberNavbar.css'; // Import your custom CSS file
import logo from '../../images/logo.png'; // Import the main logo
import smallLogo from '../../images/smalllog.svg'; // Import the smaller logo

function MemberNavbar() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementById('custom-navbar');
  //     if (window.scrollY > 50) {
  //       navbar.classList.add('custom-navbar-small');
  //     } else {
  //       navbar.classList.remove('custom-navbar-small');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Navbar id="custom-navbar" variant="tabs" className="custom-navbar" expand="lg" style={{ width: '100%' }}>
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={smallLogo} alt="Logo" className="custom-navbar-logo custom-main-logo" />
        </Navbar.Brand>
        <div className="custom-navbar-heading text-center mx-auto">
          <h1>DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD</h1>
          <p className='ktag'>ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.</p>
          <p className='subtag'>Reg. No.:- HSG-3/64/HHS/53744</p>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      </Container>
    </Navbar>
  );
}

export default MemberNavbar;
