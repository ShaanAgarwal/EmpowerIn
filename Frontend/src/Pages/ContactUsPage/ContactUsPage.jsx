import React, { useState } from "react";
import axios from 'axios';
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./ContactUsPage.css";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    query: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contactUs/sendEmailContactUs`, formData);
      if(response.data.success === true) {
        navigate('/contactUsResponse');
      } else {
        console.error('Failed to submit form');
      };
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="contact-us-page">
        <div className="component-one">
          <div className="contact-us-header">CONTACT US</div>
          <div className="description">
            If you have any questions, feedback, or concerns, please feel free
            to share them with us using the form below. Our team is dedicated to
            providing you with the best possible support.
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number *"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <textarea
              id="query"
              name="query"
              rows="4"
              placeholder="Please Type Your Message *"
              value={formData.query}
              onChange={handleChange}
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="component-two">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460493396576!2d72.83354047497865!3d19.12317758209106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1706749318376!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
