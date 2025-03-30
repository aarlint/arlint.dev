import GlassCard from '../components/GlassCard';
import { FaUser } from 'react-icons/fa';
import { about } from '../data/data';

const About = () => {
  return (
    <div className="about-content">
      <div className="section-header">
        <FaUser className="section-icon" />
        <h2>About Me</h2>
      </div>
      
      <div className="about-grid">
        <GlassCard className="about-card" delay={0.2}>
          <h3>Professional Summary</h3>
          <p>{about.summary}</p>
        </GlassCard>
        
        <GlassCard className="about-card" delay={0.4}>
          <h3>Key Highlights</h3>
          <ul className="expertise-list">
            {about.highlights.map((highlight, index) => (
              <li key={index}>
                <span className="expertise-highlight">{highlight}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        
        <GlassCard className="about-card" delay={0.6}>
          <h3>Security Clearance</h3>
          <p>
            Currently holds a <span className="highlight">Secret Clearance</span> and is eligible for{' '}
            <span className="highlight">Top Secret</span> clearance.
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default About;