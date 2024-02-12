import React from 'react'
import "./OurServices.css"
function OurServices() {
  return (
    <div className="services-container">
            <div className="service-heading">
                Our Top Services
                <div class="yellow-line">
                    <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1707039682/Vector_euhawx.png" alt="yellowLine"></img>
               </div>
            </div>
            <div className="first-box">
                <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1707676701/image_11_e55jcc.png" className="service-image1"></img>
                <div className="text1">
                    <div className="heading1">Internet of Things</div>
                    <div className="subheading1">Elevate your operations with our Internet of Things (IoT) services, seamlessly connecting devices and data for intelligent and efficient decision-making. Harness the power of IoT to enhance automation, monitor assets in real-time, and unlock new possibilities for innovation. </div>
                </div>
                <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1707676759/image_13_y4wqqj.png" className="service-image2"></img>
                <div className="text2">
                    <div className="heading2">IT Consulting</div>
                    <div className="subheading2">Navigate the complexities of the digital realm with our IT consulting services. From strategic planning to implementation, we offer expert guidance to optimize your technology infrastructure.</div>
                </div>
            </div>
            <div className="second-box">
                <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1707676713/image_12_pknurk.png" className="service-image3"></img>
                <div className="text3">
                    <div className="heading3">BlockChain Technology</div>
                    <div className="subheading3">Immerse your business in the transformative world of blockchain technology with our comprehensive services. From decentralized solutions to smart contract development, we pave the way for transparent and secure transactions.</div>
                </div>
                <img src="https://res.cloudinary.com/dijg8bdwk/image/upload/v1707676744/image_14_gbdwvr.png" className="service-image4"></img>
                <div className="text4">
                    <div className="heading4">Project Management</div>
                    <div className="subheading4">Efficiently drive your projects to success with our comprehensive project management services. From initiation to completion, we streamline processes, enhance collaboration, and ensure timely delivery. Experience a strategic approach to project execution, tailored to meet your goals.</div>
                </div>
            </div>
            <div className="one-line">
                Elevating businesses through seamless and innovative IT solutions.
            </div>
            <div className="what-client-say">
                <div className="headline">What our clients say about us?</div>
                <div className="client-says">Exceptional IT services! Their team's expertise and commitment to delivering cutting-edge solutions have significantly boosted our operational efficiency. Seamless collaboration and top-notch support make them our go-to partner for all things tech.</div>
            </div>
        </div>
  )
}

export default OurServices