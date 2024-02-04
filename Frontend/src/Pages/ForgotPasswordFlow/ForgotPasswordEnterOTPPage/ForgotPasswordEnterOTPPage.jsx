import React, { useState } from "react";
import "./ForgotPasswordEnterOTPPage.css";
import axios from 'axios';
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEnterOTPPage = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const nextIndex = index + 1;
    const lastInputIndex = 4;
    if (nextIndex <= lastInputIndex && value !== "") {
      document.getElementById(`otp-input-${nextIndex}`).focus();
    };
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleKeyDown = (index, e) => {
    if (e.keyCode === 8) {
      handleBackspace(index);
    }
  };

  const handleBackspace = (index) => {
    const currentInput = document.getElementById(`otp-input-${index}`);
    const previousIndex = index - 1;

    if (currentInput && previousIndex >= 1) {
      currentInput.value = "";
      const previousInput = document.getElementById(
        `otp-input-${previousIndex}`
      );
      if (previousInput) {
        previousInput.focus();
      };
    };
    const newOtpValues = [...otpValues];
    newOtpValues[index - 1] = "";
    setOtpValues(newOtpValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = otpValues.join("");
    try {
      const email = localStorage.getItem('email');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/forgotPassword/verifyOtpForgotPassword`, {
        email, otp
      });
      if(response.status === 200) {
        navigate('/forgotPassword-resetPassword');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="forgot-password-enter-otp-page">
        <div className="enter-otp-component">
          <div className="inner-enter-otp-component">
            <div className="otp-verification-text">OTP Verification</div>
            <div className="enter-otp-text">Enter OTP</div>
            <form className="otp-form" onSubmit={handleSubmit}>
              <div className="otp-input-container">
                {[1, 2, 3, 4].map((index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    className="otp-input"
                    maxLength="1"
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              <div className="between-text">
                <div className="question-text">
                  If you didn't receive a code,
                </div>
                <div className="resend-text">Resend</div>
              </div>
              <button type="submit" className="submit-button">
                Verify OTP
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

export default ForgotPasswordEnterOTPPage;
