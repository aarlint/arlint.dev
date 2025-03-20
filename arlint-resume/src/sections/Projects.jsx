import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Trivy Glass, Vulnerability Scanner Visualizer",
    description: "Developed a web application to visualize vulnerabilities in container images on K8s using Trivy Operator.",
    technologies: ["Svelte", "Node.js", "Kubernetes", "Trivy"],
    category: "Security",
    image: "/background.webp",
    links: {
      github: "https://github.com/arlintdev/trivyglass",
      live: null
    }
  },
  {
    title: "Kubernetes Deployment Automation",
    description: "Developed a comprehensive automation framework for Kubernetes deployments, reducing deployment time and minimizing human error.",
    technologies: ["Kubernetes", "Terraform", "Python", "AWS"],
    category: "DevOps",
    image: "/background.webp",
    links: {
      github: "https://github.com/aarlint",
      live: null
    }
  },
  {
    title: "Secure Microservices Architecture",
    description: "Designed and implemented a secure microservices architecture with service mesh for enhanced security and observability.",
    technologies: ["Docker", "Kubernetes", "Istio", "AWS"],
    category: "Security",
    image: "/background.webp",
    links: {
      github: "https://github.com/aarlint",
      live: null
    }
  },
  {
    title: "Infrastructure Monitoring Dashboard",
    description: "Built a comprehensive monitoring dashboard for infrastructure and application metrics using modern visualization tools.",
    technologies: ["Grafana", "Prometheus", "Node.js", "React"],
    category: "Monitoring",
    image: "/background.webp",
    links: {
      github: "https://github.com/aarlint",
      live: null
    }
  },
  {
    title: "CI/CD Pipeline Optimization",
    description: "Optimized CI/CD pipelines for faster builds and deployments, implementing caching strategies and parallel execution.",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "AWS"],
    category: "DevOps",
    image: "/background.webp",
    links: {
      github: "https://github.com/aarlint",
      live: null
    }
  }
];

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
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <GlassCard className="project-card" animate={false}>
                <div 
                  className="project-image" 
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-category">{project.category}</div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
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