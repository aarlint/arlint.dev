import { experience } from '../data/data';
import AnimatedSection from './AnimatedSection';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <AnimatedSection direction="right">
        <div className="experience-content">
          <div className="section-header">
            <FaBriefcase />
            <h2>Experience</h2>
          </div>
          
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>{exp.position}</h3>
                <div className="company">{exp.company}</div>
                <div className="period">{exp.startDate} - {exp.endDate}</div>
                <p className="description">{exp.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements</h4>
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
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience; 