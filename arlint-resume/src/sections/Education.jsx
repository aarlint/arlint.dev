import GlassCard from '../components/GlassCard';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="education-content">
      <div className="section-header">
        <FaGraduationCap className="section-icon" />
        <h2>Education & Certifications</h2>
      </div>
      
      <div className="education-grid">
        <GlassCard className="education-card" delay={0.2}>
          <div className="education-icon">
            <FaGraduationCap />
          </div>
          <div className="education-details">
            <h3>Bachelor of Science</h3>
            <h4>Information Systems Management</h4>
            <p className="institution">Utah State University</p>
            <p className="period">2009 - 2013</p>
            <p className="description">
              Comprehensive education in information systems, database management, 
              software development, and IT infrastructure.
            </p>
          </div>
        </GlassCard>
        
        <GlassCard className="education-card" delay={0.4}>
          <div className="education-icon">
            <FaCertificate />
          </div>
          <div className="education-details">
            <h3>Security+</h3>
            <p className="institution">CompTIA</p>
            <p className="description">
              Certification validating baseline skills necessary to perform core security functions
              and pursue an IT security career.
            </p>
          </div>
        </GlassCard>
        
        <GlassCard className="education-card" delay={0.6}>
          <div className="education-icon">
            <FaCertificate />
          </div>
          <div className="education-details">
            <h3>Continuous Learning</h3>
            <p className="description">
              Regularly participates in workshops, online courses, and industry conferences
              to stay current with emerging technologies and best practices in DevOps, 
              cloud computing, and security.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Education;