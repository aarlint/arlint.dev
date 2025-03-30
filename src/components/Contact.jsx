import AnimatedSection from './AnimatedSection';
import { FaEnvelope, FaPhone, FaGithub, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/skills';

const Contact = () => {
  return (
    <section className="contact-info">
      <AnimatedSection direction="up">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <FaEnvelope style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
            <a href="mailto:austin@arlint.dev">
              austin@arlint.dev
            </a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <FaPhone style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
            <span>(406) 218 6028</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <FaGithub style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
            <a 
              href="https://github.com/aarlint" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub: aarlint
            </a>
          </div>
        </div>
        
        <div>
          <a 
            href={personalInfo.resumeFile} 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload style={{ marginRight: '0.5rem' }} />
            Download Resume
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;