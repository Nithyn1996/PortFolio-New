import React from 'react';
import "./Hero.css";
import heroImg from "../../assets/images/hero-image.jpg"
import htmlIcon from "../../assets/images/html-icon.png"
import jsIcon from "../../assets/images/js-icon.png"
import cssIcon from "../../assets/images/css-icon.png"
import reactIcon from "../../assets/images/react-icon.png"


const Hero = () => {
  return (
    <div>
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experience That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src={htmlIcon} alt="" />
                    </div>
                    <img src={heroImg} alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src={cssIcon} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={jsIcon} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={reactIcon} alt="" />
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Hero