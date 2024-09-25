  import React from 'react'
  import "./ContactMeInfoCard.css"

  const ContactMeInfoCard = ({iconUrl, text, name}) => {

    return (
      <div className='contact-details-card'>
       <a
        href={name === 'Mail' ? `mailto:${text}` : text}
        aria-label={name === 'Mail' ? 'Send email' : `Visit ${name}`}
        target='_blank'
        rel="noopener noreferrer"
      >
          <div className="icon">
            <img src={iconUrl} alt={text} />
          </div>
          <p>{name}</p>
        </a>
          
      </div>
    )
  }

  export default ContactMeInfoCard