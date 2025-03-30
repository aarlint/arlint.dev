import AnimatedSection from './AnimatedSection';
import { FaEnvelope, FaPhone, FaGithub, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/skills';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <AnimatedSection direction="up">
        <div className="contact-content">
          <div className="contact-info">
            <a href="mailto:austin@arlint.dev" className="contact-item">
              <FaEnvelope />
              austin@arlint.dev
            </a>
            
            <div className="contact-item">
              <FaPhone />
              (406) 218 6028
            </div>
            
            <a 
              href="https://github.com/aarlint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub />
              GitHub: aarlint
            </a>
          </div>
          
          <a 
            href={personalInfo.resumeFile} 
            className="download-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;