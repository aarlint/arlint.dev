import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes, defaultTheme } from '../data/data';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || defaultTheme;
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeKey) => {
    const theme = themes[themeKey];
    const root = document.documentElement;
    
    // Apply theme variables
    root.style.setProperty('--primaryColor', theme.primaryColor);
    root.style.setProperty('--secondaryColor', theme.secondaryColor);
    root.style.setProperty('--backgroundColor', theme.backgroundColor);
    root.style.setProperty('--textColor', theme.textColor);
    root.style.setProperty('--accentColor', theme.accentColor);
    root.style.setProperty('--cardBackground', theme.cardBackground);
    root.style.setProperty('--borderColor', theme.borderColor);

    // Set data-theme attribute on body
    document.body.setAttribute('data-theme', themeKey);
  };

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
    applyTheme(themeKey);
    localStorage.setItem('theme', themeKey);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 