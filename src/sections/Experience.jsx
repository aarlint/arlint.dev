import GlassCard from '../components/GlassCard';
import { FaBriefcase } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { experience } from '../data/data';

const Experience = () => {
  return (
    <div className="experience-content">
      <div className="section-header">
        <FaBriefcase className="section-icon" />
        <h2>Professional Experience</h2>
      </div>
      
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <GlassCard className="timeline-content" delay={index * 0.2}>
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.startDate} - {exp.endDate}</span>
              </div>
              
              <p className="description">{exp.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;