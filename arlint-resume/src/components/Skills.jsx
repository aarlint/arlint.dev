import { useState, useEffect } from 'react';
import { skills } from '../data/skills';
import SkillCard from './SkillCard';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([skills[0].name]);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;

    const interval = setInterval(() => {
      const currentIndex = skills.findIndex(skill => 
        selectedSkills.includes(skill.name)
      );
      
      const nextIndex = (currentIndex + 1) % skills.length;
      setSelectedSkills([skills[nextIndex].name]);
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedSkills, autoCycle]);

  const toggleSkill = (skillName) => {
    setAutoCycle(false);
    
    if (selectedSkills.includes(skillName)) {
      if (selectedSkills.length > 1) {
        setSelectedSkills(selectedSkills.filter(name => name !== skillName));
      }
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  return (
    <section className="section">
      <AnimatedSection direction="right">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <FaStar style={{ color: 'var(--primary-color)', marginRight: '0.5rem', fontSize: '1.25rem' }} />
          <h2>Skills</h2>
        </div>
        
        <p style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>
          Click on the icons below to view details of each skill.
        </p>
        
        <div className="icon-section">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isSelected={selectedSkills.includes(skill.name)}
              onClick={() => toggleSkill(skill.name)}
            />
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <AnimatePresence>
            {skills
              .filter(skill => selectedSkills.includes(skill.name))
              .map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="skills-summary"
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <img src={skill.icon} alt={skill.name} style={{ width: '3rem', height: '3rem', marginRight: '1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{skill.name}</h3>
                  </div>
                  <p style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{skill.description}</p>
                  <p>{skill.story}</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;