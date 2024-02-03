import React from "react";
import "./HomePageTop.css";

function HomePageTop() {
    return (
        <div className="homepage-top-component">
            <div className="left-home">
                <div className="uppertext">
                    <span className="spantext span-cybersecurity">CyberSecurity</span>
                    <span className="spantext span-analytics">Analytics</span>
                    <span className="spantext span-development">Development</span>
                    <span className="spantext span-infrastructure">Infrastructure</span>
                </div>
                <div className="heading-home">
                    <h3 className="heading-text">
                        Elite IT Services for Unrivaled Quality
                    </h3>
                </div>
                <div className="subheading-home">
                    <h3 className="subheading-text">
                        Rapid IT Solutions, 24/7 Support for Individuals and Businesses.
                    </h3>
                </div>
                <div className="home-buttons">
                    <div className="btn btn1">Contact Us</div>
                    <div className="btn btn2">Explore</div>
                </div>
            </div>
            <div className="right-home">
                <div className="image-right">
                    <img
                        src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1706904144/image_2_f6xnwm.png"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePageTop;
