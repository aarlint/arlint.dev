import GlassCard from '../components/GlassCard';
import { FaUser } from 'react-icons/fa';

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
          <p>
            Senior DevSecOps Engineer and Full Stack Developer with over 10 years of professional 
            experience in DevOps and Application Development. Specialized in containerization, 
            cloud infrastructure, and secure application deployment.
          </p>
        </GlassCard>
        
        <GlassCard className="about-card" delay={0.4}>
          <h3>Expertise</h3>
          <ul className="expertise-list">
            <li>
              <span className="expertise-highlight">Cloud Infrastructure</span>
              <p>Designing and managing scalable cloud solutions on AWS</p>
            </li>
            <li>
              <span className="expertise-highlight">Container Orchestration</span>
              <p>Kubernetes, Docker, and microservices architecture</p>
            </li>
            <li>
              <span className="expertise-highlight">Security</span>
              <p>DevSecOps practices and secure application development</p>
            </li>
            <li>
              <span className="expertise-highlight">Full Stack Development</span>
              <p>Building end-to-end applications with modern frameworks</p>
            </li>
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