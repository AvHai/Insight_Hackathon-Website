import React from 'react';
import logo from '@/assets/logo.png';
import insight from '@/assets/insight.png';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 ">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px', // Typical navbar height
        }}
      >
        <img src={insight} alt="Centered Image" style={{ height: '400px' }} />
      </div>
    </nav>
  );
};

export default Navigation;