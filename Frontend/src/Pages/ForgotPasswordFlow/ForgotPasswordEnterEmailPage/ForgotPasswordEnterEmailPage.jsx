import React, { useState } from "react";
import axios from "axios";
import "./ForgotPasswordEnterEmailPage.css";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";

const ForgotPasswordEnterEmailPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/forgotPassword/registerEmailForgotPassword`,
        { email }
      );
      if(response.status === 200) {
        localStorage.setItem('email', email);
        navigate("/forgotPassword-enterOTP");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="forgot-password-enter-email-page">
        <div className="enter-email-component">
          <div className="inner-enter-email-component">
            <div className="forgot-password-text">Forgot Password?</div>
            <div className="enter-email-address-text">Enter Email Address</div>
            <form className="email-form" onSubmit={handleSubmit}>
              <label className="label-email">
                Email
                <input
                  type="email"
                  required
                  placeholder="username@gmail.com"
                  className="email-input"
                  value={email}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="submit-button">
                Send
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

export default ForgotPasswordEnterEmailPage;
