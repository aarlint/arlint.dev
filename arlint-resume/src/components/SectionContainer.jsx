import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SectionContainer = ({ 
  children, 
  id, 
  className = '', 
  fullHeight = false,
  bgColor = 'transparent'
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`section-container ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div ref={ref} className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContainer;