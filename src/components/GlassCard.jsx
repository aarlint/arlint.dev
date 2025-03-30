// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  animate = true, 
  delay = 0, 
  direction = 'up',
  onClick = null,
  hover = true
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  };

  const hoverEffect = hover ? {
    whileHover: { 
      scale: 1.02,
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)'
    },
    whileTap: { scale: 0.98 }
  } : {};

  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={animate ? "hidden" : "visible"}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      variants={variants}
      onClick={onClick}
      {...hoverEffect}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;