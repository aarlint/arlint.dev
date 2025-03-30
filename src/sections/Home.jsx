// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const titleText = personalInfo.name;
  const subtitleText = personalInfo.title;

  return (
    <div className="home-content">
      <div className="home-hero">
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={personalInfo.profilePicture} 
            alt={`${personalInfo.name}'s Profile`} 
            className="profile-image"
          />
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split('').map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GlassCard className="subtitle-card" animate={false}>
            <p>{subtitleText}</p>
          </GlassCard>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-arrow">
              <span></span>
              <span></span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;