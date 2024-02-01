import React from "react";
import "./ForgotPasswordEnterOTPPage.css";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import CharacterImage from "../../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../../assets/Images/Authentication/Cactus.png";

const ForgotPasswordEnterOTPPage = () => {
  const handleInputChange = (index, value) => {
    const nextIndex = index + 1;
    const lastInputIndex = 4;
    
    if (nextIndex <= lastInputIndex && value !== "") {
      document.getElementById(`otp-input-${nextIndex}`).focus();
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
            <form className="otp-form">
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
