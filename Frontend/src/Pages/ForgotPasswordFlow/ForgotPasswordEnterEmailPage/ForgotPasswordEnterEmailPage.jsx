import React from "react";
import "./ForgotPasswordEnterEmailPage.css";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";
import { Link } from "react-router-dom";

const ForgotPasswordEnterEmailPage = () => {
  return (
    <>
      <div className="test-navbar">Navbar</div>
      <div className="forgot-password-enter-email-page">
        <div className="enter-email-component">
          <div className="inner-enter-email-component">
            <div className="welcome-back-text">Forgot Password?</div>
            <div className="login-text">Enter Email Address</div>
            <form className="login-form">
              <label className="label-email">
                Email
                <input
                  type="email"
                  required
                  placeholder="username@gmail.com"
                  className="email-input"
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
    </>
  );
};

export default ForgotPasswordEnterEmailPage;
