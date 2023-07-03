import React, { useState } from 'react';
import './ModePage.scss';
import FontAwesome from 'react-fontawesome';

const ModePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <span className="toggle-button" onClick={toggleBackground}>
      <FontAwesome icon="fa-solid fa-moon" />
            </span>
    </div>
  );
};

export default ModePage;
