import React, { useState } from "react";
import axios from "axios"; // Import Axios library
import "./ForgotPasswordResetPasswordPage.css";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";
import { useNavigate } from "react-router-dom";

const ForgotPasswordResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem('email');
      const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/forgotPassword/passwordResetForgotPassword`, {
        email: email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      console.log(response);
      if (response.status === 200) {
        navigate('/');
      };
    } catch (error) {
      console.error(error);
    }
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
