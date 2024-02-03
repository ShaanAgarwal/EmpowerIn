import React from 'react'
import "./HomePageTop.css";
function HomePageTop() {
  return (
    <div className="top-home-page">
    <div className="left-home">
        <div className="uppertext">
            <span className="spantext">CyberSecurity</span>
            <span className="spantext">Analytics</span>
            <span className="spantext">Development</span>
            <span className="spantext">Infrastructure</span>
        </div>

        <div className="heading-home">
            <h3 className="heading-text">Elite IT Services for Unrivaled Quality</h3>
            
        </div>

        <div className="subheading-home">
            <h3 className="subheading-text">Rapid IT Solutions, 24/7 Support for Individuals and Businesses.</h3>
        </div>
        <div className="home-buttons">
                <input type="button" value="Contact Us" className="btn1"></input>
                <input type="button" name="Explore" value="Explore" className="btn2"></input>
        </div>
    </div>
    <div className="right-home">
        <div className="image-right">
            <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1706904144/image_2_f6xnwm.png" alt="image"></img>
        </div>
    </div>
</div>
    
  )
}

export default HomePageTop