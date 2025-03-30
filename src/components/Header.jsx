import { personalInfo } from '../data/skills';
import AnimatedSection from './AnimatedSection';

const Header = () => {
  return (
    <AnimatedSection direction="down" className="header">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src={personalInfo.profilePicture} 
          alt={`${personalInfo.name}'s Profile Picture`}
          className="header-img"
        />
        <div>
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.title}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Header;