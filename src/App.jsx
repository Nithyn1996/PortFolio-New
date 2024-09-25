import { useRef } from 'react'
import './App.css'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import "./index.css"

function App() {

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
       <Navbar scrollToSection={scrollToSection} heroRef={heroRef} skillsRef={skillsRef} workExperienceRef={workExperienceRef} contactRef={contactRef} />
       <div className="container">
        <section ref={heroRef}>
          <Hero />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={workExperienceRef}>
          <WorkExperience />
        </section>
        <section ref={contactRef}>
          <ContactMe />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
