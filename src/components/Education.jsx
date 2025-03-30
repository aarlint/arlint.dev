import AnimatedSection from './AnimatedSection';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/data';

const Education = () => {
  return (
    <section className="section">
      <AnimatedSection direction="right">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <FaGraduationCap style={{ color: 'var(--primary-color)', marginRight: '0.5rem', fontSize: '1.25rem' }} />
          <h2>Education</h2>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {education.map((edu, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
              <span>
                {edu.degree} in {edu.field} - {edu.institution} ({edu.startDate} - {edu.endDate})
              </span>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
};

export default Education;