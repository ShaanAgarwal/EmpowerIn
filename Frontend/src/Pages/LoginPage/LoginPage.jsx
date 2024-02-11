import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import CharacterImage from "../../assets/Images/Authentication/Character-Working.png";
import Cactus from "../../assets/Images/Authentication/Cactus.png";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/userLogin`,
        formData
      );
      if (response.data.success === true) {
        localStorage.setItem("JWT_TOKEN", response.data.token);
        const user = response.data.userExist.userType;
        if (user == 'Admin') {
          navigate('/admin-baseDashboard');
        } else if (user == 'HeadHR') {
          navigate('/headHR-baseDashboard');
        } else if (user == 'HR') {
          navigate('/HR-baseDashboard');
        } else {
          navigate('/candidate-baseDashboard');
        };
      };
    } catch (error) {
      console.log(error);
    };
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
              <Link to='/forgotPassword-enterEmail' className="forgot-password">Forgot Password?</Link>
              <button type="submit" className="submit-button">
                Sign in
              </button>
            </form>
            <div className="lower-text">
              <div className="starting-text">Don't have an account yet?</div>
              <Link className="register-text" to='/registerCandidate-form'>Register for free</Link>
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
