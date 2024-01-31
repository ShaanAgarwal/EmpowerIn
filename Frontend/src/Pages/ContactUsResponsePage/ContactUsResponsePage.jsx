import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./ContactUsResponsePage.css";
import {Link} from 'react-router-dom';

const ContactUsResponsePage = () => {
  return (
    <>
      <div className="my-one">Navbar</div>
      <div className="contact-us-response-page">
        <div className="middle-content">
          <div className="thankyou-text">THANK YOU</div>
          <div className="support-text-one">For Getting In Touch With Us</div>
          <div className="support-text-two">
            Our team will get back to you soon.
          </div>
          <div className="back-to-home-button">
            <Link to="/" className="link-class">
              <div className="display-text">Back To Home</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsResponsePage;
