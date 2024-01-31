import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-header">
        <div className="navbar-company-logo">
          <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1705916632/empowerin-high-resolution-logo-black-transparent_1_gjbrsm.png" alt="logo"></img>
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
  )
}

export default NavBar