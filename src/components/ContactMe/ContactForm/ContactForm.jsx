import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();

    // State for form values
    const [formData, setFormData] = useState({
      firstname: '',
      email: '',
      message: '',
    });
  
    // State for validation errors
    const [errors, setErrors] = useState({
      firstname: '',
      email: '',
      message: '',
    });

      // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear the error when user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = 'First Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
  
    try {  
      const response = await emailjs.sendForm(
        'service_upwq8ic',
        'template_18oxqxh',
        formRef.current,
        'yxo8dAgokBtpchlxe'
      );
    
      if (response.status === 200) {
        alert('Email sent successfully!');
        // formRef.current.reset();
        setFormData({ user_name: '', user_email: '', message: '' });
      } else {
        alert(`Unexpected response: ${response.text}`);
      }
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };
  return (
    <div className="contact-form-content">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstname" id="" placeholder="First Name" value={formData.firstname} onChange={handleChange}/>
          <input type="text" name="lastname" id="" placeholder="Last Name"  />
        </div>
        {errors.firstname && <p className="error">{errors.firstname}</p>}

        <input type="text" name="email" id="" placeholder="email" value={formData.email} onChange={handleChange}/>
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea name="message" type="text" id="" placeholder="Message" rows={3} value={formData.message} onChange={handleChange}/>
        {errors.message && <p className="error">{errors.message}</p>}
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
