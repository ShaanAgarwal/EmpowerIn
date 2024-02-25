import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import CompanyLogo from "../../assets/Images/CompanyLogo/Company-Logo.png";

const NavBar = () => {
  return (
    <div className="navbar-header">
      <div className="navbar-company-logo">
        <Link to="/">
          <img src={CompanyLogo} alt="Company Logo" className='company-logo-picture' />
        </Link>
      </div>
      <div className="navbar-content">
        <Link to="/aboutUs" className="navbar-element">About</Link>
        <Link to="/contactUs" className="navbar-element">Contact</Link>
        <Link to="/services" className="navbar-element">Services</Link>
        <Link to="/career" className="navbar-element">Career</Link>
      </div>
      <div className="navbar-login-button-container">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;