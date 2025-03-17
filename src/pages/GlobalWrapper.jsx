import React from 'react';
import backgroundImage from '../assets/logo.png'; 

const GlobalWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlobalWrapper;