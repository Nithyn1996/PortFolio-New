import React from 'react'
import "./ContactMe.css"
import ContactMeInfoCard from './ContactMeInfoCard/ContactMeInfoCard'
import mailIcon from "../../assets/images/email-icon.png"
import gitIcon from "../../assets/images/git-icon.png"
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    const email = "nithyananthamganesan@outlook.com"
    const git = "https://github.com/nithyn1996"

  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactMeInfoCard iconUrl={mailIcon} text={email} name="Mail" />
                <ContactMeInfoCard iconUrl={gitIcon} text={git} name="Github"/>
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe