import React from 'react';
import logo from '@/assets/logo.png';
import insight from '@/assets/insight.png';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-center items-center h-24 sm:h-32 md:h-48 lg:h-[300px]">
        <img
          src={insight}
          alt="Centered Image"
          className="h-16 sm:h-24 md:h-32 lg:h-[400px] object-contain"
        />
      </div>
    </nav>
  );
};

export default Navigation;