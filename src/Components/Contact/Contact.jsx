// unchanged imports
import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';
import { FaRegCopy } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(""), 3000); // 3 seconds
  };

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setPopupMessage("Sending...");
    setShowPopup(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "7a5c1eaa-f6fd-4b94-9f6a-a5c2b1852b79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setPopupMessage("✅ Form Submitted Successfully");
      event.target.reset();
    } else {
      setPopupMessage(`❌ Error: ${data.message}`);
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div id='contact' className='contact'>
      {showPopup && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}

      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Have a project in mind? Let's discuss it. I'm always open to new opportunities and collaborations.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <div className="copy-container">
                <p>abdelrhman2215@gmail.com</p>
                <FaRegCopy
                  className="copy-icon"
                  onClick={() => handleCopy('abdelrhman2215@gmail.com', 'email')}
                  title="Copy email"
                />
                {copied === 'email' && <span className="copied-text">Copied!</span>}
              </div>
            </div>

            <div className="contact-detail">
              <img src={call} alt="" />
              <div className="copy-container">
                <p>+201067121760</p>
                <FaRegCopy
                  className="copy-icon"
                  onClick={() => handleCopy('+201067121760', 'phone')}
                  title="Copy number"
                />
                {copied === 'phone' && <span className="copied-text">Copied!</span>}
              </div>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here:</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
