import React, { useState } from "react";
import logo from "../../assets/images/logo-icon.png";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import resume from "../../assets/docs/Resume.pdf"


const Navbar = ({ scrollToSection, heroRef, skillsRef, workExperienceRef, contactRef }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  };

  const handleNavClick = (ref, event) => {
    event.preventDefault(); // Prevent any default behavior, such as page reload
    scrollToSection(ref); // Trigger smooth scrolling
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} scrollToSection={scrollToSection} heroRef={heroRef} skillsRef={skillsRef} workExperienceRef={workExperienceRef} contactRef={contactRef} handleNavClick={handleNavClick} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <a href="" onClick={(e) => handleNavClick(heroRef, e)} className="menu-item">
            <img src={logo} alt="" className="logo" />
          </a>
          <ul>
            <li >
              <a href="" onClick={(e) => handleNavClick(heroRef, e)} className="menu-item">
                Home
              </a>
            </li>
            <li >
              <a href="" onClick={(e) => handleNavClick(skillsRef, e)} className="menu-item">
                Skills
              </a>
            </li>
            <li >
              <a href="" onClick={(e) => handleNavClick(workExperienceRef, e)} className="menu-item">
                Work Experience
              </a>
            </li>
            <li >
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}
            
            >{openMenu ? "close": "menu" }</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
