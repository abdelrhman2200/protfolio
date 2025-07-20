import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (type) => {
    if (type === 'terms') {
      setModalContent(
        <>
          <h3>Terms of Service</h3>
          <p>Welcome to my portfolio website. By accessing or using this site, you agree to be bound by the following terms:</p>
          <ul>
            <li>This site is for informational and personal use only.</li>
            <li>All content is owned by the developer unless otherwise stated.</li>
            <li>You may not duplicate, copy, or resell any part of this website.</li>
            <li>Unauthorized use may result in legal action.</li>
          </ul>
          <p>Thank you for respecting my terms.</p>
        </>
      );
    } else if (type === 'privacy') {
      setModalContent(
        <>
          <h3>Privacy Policy</h3>
          <p>I respect your privacy. Here's how your information is handled:</p>
          <ul>
            <li>No personal data is collected without your consent.</li>
            <li>Emails entered are only used to respond to inquiries.</li>
            <li>I do not sell or share your information with third parties.</li>
            <li>This site may collect anonymous usage data for performance insights.</li>
          </ul>
          <p>Your trust is important to me.</p>
        </>
      );
    }
    setShowModal(true);
  };

  return (
    <div id='footer' className='footer'>
      <hr className='hrstyling'/>
      <div className="footer-bottom">
        <p>© 2025 All rights reserved</p>
        <div className="footer-links">
          <span onClick={() => handleOpenModal('terms')}>Terms of Service</span>
          <span onClick={() => handleOpenModal('privacy')}>Privacy Policy</span>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-body">
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
