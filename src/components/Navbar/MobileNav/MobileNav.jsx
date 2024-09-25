import React from 'react'
import "./MobileNav.css"
import logo from "../../../assets/images/logo-icon.png";
import resume from "../../../assets/docs/Resume.pdf"

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
                <a
                  href={resume} 
                  download="Nithyanantham_Resume.pdf"
                  style={{textDecoration: 'none'}}
                >
                  <button className="contact-btn">
                    Download CV
                  </button>
                </a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav