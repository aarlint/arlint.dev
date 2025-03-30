import { about } from '../data/data';
import AnimatedSection from './AnimatedSection';
import { FaUser } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <AnimatedSection direction="right">
        <div className="about-content">
          <div className="about-summary">
            <div className="section-header">
              <FaUser />
              <h2>About Me</h2>
            </div>
            <p>{about.summary}</p>
          </div>
          
          <div className="about-highlights">
            <h2>Key Highlights</h2>
            <ul>
              {about.highlights.map((highlight, index) => (
                <li key={index}>
                  <span className="highlight">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About; 