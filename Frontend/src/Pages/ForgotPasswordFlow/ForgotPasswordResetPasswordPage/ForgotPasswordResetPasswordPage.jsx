import React, { useState } from "react";
import "./ForgotPasswordResetPasswordPage.css";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";

const ForgotPasswordResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
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
    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);
  };

  return (
    <>
      <NavBar />
      <div className="forgot-password-reset-password-page">
        <div className="reset-password-component">
          <div className="inner-reset-password-component">
            <div className="reset-password-text">Reset Password</div>
            <form onSubmit={handleSubmit} className="reset-password-form">
              <label className="label-password">
                Enter New Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Choose A Strong Password"
                  className="password-input"
                />
              </label>
              <label className="label-password">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm Password"
                  className="password-input"
                />
              </label>
              <button type="submit" className="submit-button">
                Reset My Password
              </button>
            </form>
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

export default ForgotPasswordResetPasswordPage;