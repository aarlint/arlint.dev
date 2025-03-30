import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaWater, FaTree, FaGem } from 'react-icons/fa';

const ThemeSelector = () => {
  const { currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    light: <FaSun />,
    dark: <FaMoon />,
    ocean: <FaWater />,
    forest: <FaTree />,
    purpleGlass: <FaGem />
  };

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.theme-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="theme-selector" data-open={isOpen}>
      <button 
        className="theme-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        {themeIcons[currentTheme]}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="theme-menu"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {Object.entries(themeIcons).map(([theme, icon]) => (
              <button
                key={theme}
                className={`theme-option ${currentTheme === theme ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme)}
                aria-label={`Switch to ${theme} theme`}
              >
                {icon}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector; 