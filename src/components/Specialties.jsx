import AnimatedSection from './AnimatedSection';
import { FaStar } from 'react-icons/fa';

const Specialties = () => {
  return (
    <section className="section">
      <AnimatedSection direction="left">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <FaStar style={{ color: 'var(--primary-color)', marginRight: '0.5rem', fontSize: '1.25rem' }} />
          <h2>Specialties</h2>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
            <span>
              10+ years of professional experience in{' '}
              <span className="highlight">DevOps</span> and Application Development.
            </span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
            <span>
              Senior <span className="highlight">DevSecOps Engineer</span> with a deep understanding of{' '}
              <span className="highlight">Kubernetes</span> and cloud environments.
            </span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>•</span>
            <span>
              Holds a <span className="highlight">Secret Clearance</span> and is eligible for{' '}
              <span className="highlight">Top Secret</span> clearance.
            </span>
          </li>
        </ul>
      </AnimatedSection>
    </section>
  );
};

export default Specialties;