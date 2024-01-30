import React from 'react';
import "./Footer.css";
import TopRightComponentImage from "../../assets/Images/Footer/Top-Right-Component.png";
import FollowUs from '../../assets/Images/Footer/Follow-Us-Text.png';
import BottomPartImage from '../../assets/Images/Footer/Bottom-Part-Image.png';

const Footer = () => {
  return (
    <div className='footer-component'>
        <div className="top-right-component">
            <img src={TopRightComponentImage} alt="Top Right Component Image" className='top-right-component-image' />
        </div>
        <div className="middle-component">
            <div className="top-part">
                <img src={FollowUs} alt="Follow Us Text" className='follow-us-text' />
            </div>
            <div className="middle-part"></div>
            <div className="bottom-part">
                <img src={BottomPartImage} alt="Bottom Part Image" className='bottom-part-image' />
            </div>
        </div>
    </div>
  );
};

export default Footer;