import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { contact, personalInfo } from '../data/data';
import { FaEnvelope, FaPhone, FaGithub, FaFileDownload, FaPaperPlane, FaLinkedin, FaTwitter } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a mailto link with the form data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Show success message
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Opening your email client with the prefilled message.'
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };
  
  return (
    <div className="contact-content">
      <div className="section-header">
        <FaEnvelope className="section-icon" />
        <h2>Get In Touch</h2>
      </div>
      
      <div className="contact-grid">
        <GlassCard className="contact-info-card" delay={0.2}>
          <h3>Contact Information</h3>
          
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>{contact.location}</span>
          </div>
          
          <div className="social-links">
            {contact.socialLinks.github && (
              <a 
                href={contact.socialLinks.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="social-icon" />
                GitHub
              </a>
            )}
            {contact.socialLinks.linkedin && (
              <a 
                href={contact.socialLinks.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
            )}
            {contact.socialLinks.twitter && (
              <a 
                href={contact.socialLinks.twitter}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter className="social-icon" />
                Twitter
              </a>
            )}
          </div>
          
          <div className="resume-download">
            <a 
              href={personalInfo.resumeFile} 
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload className="download-icon" />
              Download Resume
            </a>
          </div>
        </GlassCard>
        
        <GlassCard className="contact-form-card" delay={0.4}>
          <h3>Send a Message</h3>
          
          {formStatus.submitted ? (
            <motion.div 
              className={`form-message ${formStatus.success ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formStatus.message}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <FaPaperPlane className="submit-icon" />
                Send Message
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;