import { useState, useEffect } from 'react';
import { personalInfo } from '../data/data';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSelector from './ThemeSelector';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();
        
        if (rect.top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use setTimeout to ensure the scroll happens after any other events
      setTimeout(() => {
        try {
          // First try scrollIntoView which works better on most devices
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } catch {
          // Fallback to window.scrollTo if scrollIntoView fails
          const yOffset = -100; // Adjust this value based on your navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
        setActiveSection(sectionId);
      }, 50); // Increased delay for better reliability
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span>{personalInfo.name.split(' ')[0]}</span>
          <span className="highlight-text">{personalInfo.name.split(' ')[1]}</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="navbar-links">
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={activeSection === section.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default button behavior
                  scrollToSection(section.id);
                }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            </li>
          ))}
          <li>
            <ThemeSelector />
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <button
                    className={activeSection === section.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default button behavior
                      scrollToSection(section.id);
                      // Delay closing the menu to ensure scroll happens first
                      setTimeout(() => {
                        setMenuOpen(false);
                      }, 300); // Increased delay for better mobile experience
                    }}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
              <li>
                <ThemeSelector />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;