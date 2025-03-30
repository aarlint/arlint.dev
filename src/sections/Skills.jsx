import { useState } from 'react';
import { skills } from '../data/data';
import GlassCard from '../components/GlassCard';
import { FaCode, FaStar } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };
  
  return (
    <div className="skills-content">
      <div className="section-header">
        <FaCode className="section-icon" />
        <h2>Technical Skills</h2>
      </div>
      
      <div className="skills-grid">
        {skills.filter(skill => skill.show).map((skill, index) => (
          <GlassCard
            key={skill.name}
            className={`skill-card ${selectedSkill === skill ? 'selected expanded-skill' : ''}`}
            delay={index * 0.1}
            onClick={() => handleSkillClick(skill)}
          >
            <div className="skill-header">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
            
            <div className="skill-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`star ${i < Math.floor(Math.random() * 2) + 4 ? 'filled' : ''}`}
                />
              ))}
            </div>
            
            <AnimatePresence>
              {selectedSkill === skill && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="skill-details"
                >
                  <div className="expanded-skill-content">
                    <p className="skill-description">{skill.description}</p>
                    <p className="skill-story">{skill.story}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;