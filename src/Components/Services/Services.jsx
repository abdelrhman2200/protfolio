import React, { useState, useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openForm = (serviceName) => {
    setSelectedServices([serviceName]);
    setShowForm(true);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices((prev) => [...new Set([...prev, value])]);
    } else {
      setSelectedServices((prev) => prev.filter((s) => s !== value));
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedServices([]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setPopupMessage("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "7a5c1eaa-f6fd-4b94-9f6a-a5c2b1852b79");
    formData.set("services", selectedServices.join(", "));
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setPopupMessage("✅ Request Submitted Successfully");
        event.target.reset();
        setShowForm(false);
      } else {
        setPopupMessage(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setPopupMessage("❌ Network error. Try again.");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div id="services" className="services" data-aos="fade-up">
      {showPopup && <div className="popup-message">{popupMessage}</div>}

      {showForm && (
        <div className="services-modal">
          <div className="services-modal-content" data-aos="zoom-in">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <h2>Request Services</h2>
            <form onSubmit={onSubmit} className="services-form">
              <label>Select Services</label>
              <div className="checkbox-list">
                {services_data.map((service, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service.s_name}
                      checked={selectedServices.includes(service.s_name)}
                      onChange={handleCheckboxChange}
                    />
                    {service.s_name}
                  </label>
                ))}
              </div>

              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label>Additional Message (optional)</label>
              <textarea
                name="message"
                placeholder="Your message (optional)"
                rows="4"
              />

              <button
                type="submit"
                className="services-submit"
                disabled={showPopup}
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="services-title" data-aos="fade-up">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="services-container">
        {services_data.map((service, index) => (
          <div
            key={index}
            className="services-format"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div
              className="services-request"
              onClick={() => openForm(service.s_name)}
            >
              <p>Request Service</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
