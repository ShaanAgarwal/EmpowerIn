import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import CharacterImage from "../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../assets/Images/Authentication/Cactus.png";
import NavBar from "../../Components/NavBar/NavBar";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <>
      <NavBar />
      <div className="login-page">
        <div className="login-component">
          <div className="inner-login-component">
            <div className="welcome-back-text">Welcome Back</div>
            <div className="login-text">Login</div>
            <form onSubmit={handleSubmit} className="login-form">
              <label className="label-email">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="username@gmail.com"
                  className="email-input"
                />
              </label>
              <label className="label-password">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="password-input"
                />
              </label>
              <Link className="forgot-password">Forgot Password?</Link>
              <button type="submit" className="submit-button">
                Sign in
              </button>
            </form>
            <div className="lower-text">
              <div className="starting-text">Don't have an account yet?</div>
              <Link className="register-text">Register for free</Link>
            </div>
          </div>
        </div>
        <div className="picture-component">
          <img
            src={CharacterImage}
            alt="Character Working On Laptop Sitting On Chair"
            className="character-image"
          />
          <img src={Cactus} alt="Cactus Image" className="cactus-image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
