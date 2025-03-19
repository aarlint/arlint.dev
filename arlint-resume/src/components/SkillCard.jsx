import { motion } from 'framer-motion';

const SkillCard = ({ skill, isSelected, onClick }) => {
  return (
    <motion.div
      className={`icon-container ${isSelected ? 'selected' : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <img src={skill.icon} alt={skill.name} />
    </motion.div>
  );
};

export default SkillCard;