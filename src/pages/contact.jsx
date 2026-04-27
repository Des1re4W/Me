import React, { useState } from 'react';
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Thank you! Your message has been sent. 🚀');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };
  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">Let's create something amazing together</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">Get in touch</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <div className="info-label">Email</div>
                  <a href="mailto:shanbenzerfajagutana002@gmail.com" className="info-value">shanbenzerfajagutana002@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">Philippines</div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/shan-benzer" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/hellcutie_/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/des1redug" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {status && (
                <div className={`status-message ${status.includes('Thank') ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;