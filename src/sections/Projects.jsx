import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/data';

// Function to generate screenshot URL using Microlink
const getScreenshotUrl = (url) => {
  if (!url) return '/background.webp';
  // Using Microlink's screenshot API
  return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="projects-content">
      <div className="section-header">
        <FaFolder className="section-icon" />
        <h2>Featured Projects</h2>
      </div>
      
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <GlassCard className="project-card" animate={false}>
                <div 
                  className="project-image" 
                  style={{ 
                    backgroundImage: `url(${project.link ? getScreenshotUrl(project.link) : project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="project-category">{project.category}</div>
                </div>
                
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;