import React from 'react'
import "./MobileNav.css"
import logo from "../../../assets/images/react-icon.png";

const MobileNav = ({isOpen, toggleMenu, scrollToSection, heroRef, skillsRef, workExperienceRef, contactRef, handleNavClick}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
              <img src={logo} alt="" className="logo" />
              <ul>
                <li>
                  <a href="" onClick={(e) => handleNavClick(heroRef, e)} className="menu-item">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => handleNavClick(skillsRef, e)} className="menu-item">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => handleNavClick(workExperienceRef, e)} className="menu-item">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => handleNavClick(contactRef, e)} className="menu-item">
                    Contact Me
                  </a>
                </li>
            <button className="contact-btn" onClick={() => {}}>Download CV</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav