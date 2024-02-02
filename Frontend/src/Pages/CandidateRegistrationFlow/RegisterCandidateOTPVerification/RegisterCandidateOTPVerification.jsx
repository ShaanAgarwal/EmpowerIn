import React from "react";
import "./RegisterCandidateOTPVerification.css";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";

const RegisterCandidateOTPVerification = () => {
  const handleInputChange = (index, value) => {
    const nextIndex = index + 1;
    const lastInputIndex = 4;

    if (nextIndex <= lastInputIndex && value !== "") {
      document.getElementById(`otp-input-${nextIndex}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.keyCode == 8) {
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
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="register-candidate-otp-verification">
        <div className="otp-verification-component">
          <div className="inner-otp-component">
            <div className="line-header">Verification Code</div>
            <div className="component-description">
              We have sent the verification code <br /> to your email address
            </div>
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
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              <button type="submit" className="verify-button">
                VERIFY OTP
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterCandidateOTPVerification;
