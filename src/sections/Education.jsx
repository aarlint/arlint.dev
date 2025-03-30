import GlassCard from '../components/GlassCard';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { education } from '../data/data';

const Education = () => {
  return (
    <div className="education-content">
      <div className="section-header">
        <FaGraduationCap className="section-icon" />
        <h2>Education & Certifications</h2>
      </div>
      
      <div className="education-grid">
        {education.map((edu, index) => (
          <GlassCard key={index} className="education-card" delay={0.2 + (index * 0.2)}>
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <h4>{edu.field}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.startDate} - {edu.endDate}</p>
              <p className="description">
                {edu.achievements.join('. ')}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Education;