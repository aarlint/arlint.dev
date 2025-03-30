import GlassCard from '../components/GlassCard';
import { FaBriefcase } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "RAFT",
    position: "Senior DevSecOps Engineer",
    period: "2020 - Present",
    description: "Lead DevSecOps engineer responsible for managing Kubernetes clusters across various environments including AWS and EKS. Implemented automation for container orchestration and optimized deployment pipelines for microservices.",
    achievements: [
      "Automated deployment pipelines, reducing deployment time by 70%",
      "Implemented infrastructure as code using Terraform",
      "Managed multiple Kubernetes clusters ensuring high availability",
      "Optimized resource utilization and reduced cloud costs by 25%"
    ],
    technologies: ["Kubernetes", "AWS", "Terraform", "Docker", "CI/CD"]
  },
  {
    company: "NTT",
    position: "Senior DevOps Engineer",
    period: "2017 - 2020",
    description: "Responsible for containerizing complex multi-tier applications and ensuring consistent environments from development to production. Implemented CI/CD pipelines and automated infrastructure management tasks.",
    achievements: [
      "Managed multiple Kubernetes clusters using Rancher",
      "Developed custom Python scripts for infrastructure automation",
      "Managed Azure cloud resources and DevOps pipelines",
    ],
    technologies: ["Docker", "Python", "K8s", "Node.js", "Azure", "Rancher"]
  },
  {
    company: "NTT",
    position: "Application Developer and Automation Engineer",
    period: "2015 - 2017",
    description: "Worked as a full-stack developer and automation engineer. Developed web applications using Django and Node.js, and created automation scripts to streamline development workflows.",
    achievements: [
      "Containerized applications using Docker",
      "Nodered flow development for process automation",
      "Implemented Ansible for configuration management",
      "Built full-stack applications using Django and Node.js"
    ],
    technologies: ["Docker", "Python", "Ansible", "Django", "Node-Red", "Node.js"]
  }
];

const Experience = () => {
  return (
    <div className="experience-content">
      <div className="section-header">
        <FaBriefcase className="section-icon" />
        <h2>Professional Experience</h2>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <GlassCard className="timeline-content" delay={index * 0.2}>
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
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