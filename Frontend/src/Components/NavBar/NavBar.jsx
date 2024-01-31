import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import CompanyLogo from "../../assets/Images/CompanyLogo/Company-Logo.png"

const NavBar = () => {
  return (
    <div className="navbar-header">
      <div className="navbar-company-logo">
        <img src={CompanyLogo} alt="Company Logo" className='company-logo-picture'></img>
      </div>
      <div class="nav-content">
        <Link to="/aboutUs" className="nav-a">About</Link>
        <Link to="/contactUs" className="nav-a">Contact</Link>
        <Link to="/services" className="nav-a">Services</Link>
        <Link to="/career" className="nav-a">Career</Link>
      </div>
      <div class="nav-button">
        <button class="nav-login">Login</button>
      </div>
    </div>
  );
};

export default NavBar;