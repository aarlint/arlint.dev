import AnimatedSection from './AnimatedSection';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="section">
      <AnimatedSection direction="right">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <FaGraduationCap style={{ color: 'var(--primary-color)', marginRight: '0.5rem', fontSize: '1.25rem' }} />
          <h2>Education</h2>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
            <span>
              Bachelor of Science in Information Systems Management - Utah State University (2009 - 2013)
            </span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
            <span>
              <span className="highlight">Security +</span>
            </span>
          </li>
        </ul>
      </AnimatedSection>
    </section>
  );
};

export default Education;