import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const RegisterButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <div className="relative">
        {/* Elegant glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl opacity-80 animate-pulse-slow" />
        
        {/* Main button */}
        <Button
          className="relative bg-gradient-to-r from-primary/90 to-accent/90 hover:from-primary hover:to-accent hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-500 ease-out px-12 py-6 text-lg font-orbitron font-bold rounded-full border border-primary/30 glass backdrop-blur-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.open('https://forms.gle/k2tVrDXQzDhHfji67', '_blank')}
        >
          <div className="flex items-center space-x-3">
            <Zap className={`w-6 h-6 transition-transform duration-300 text-primary-foreground ${isHovered ? 'rotate-12 scale-110' : ''}`} />
            <span className="text-primary-foreground font-bold">REGISTER NOW</span>
            <ArrowRight className={`w-6 h-6 transition-transform duration-300 text-primary-foreground ${isHovered ? 'translate-x-1 scale-110' : ''}`} />
          </div>
        </Button>
        
        {/* Particle effects on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-tech-accent rounded-full animate-ping" />
            <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-art-accent rounded-full animate-ping delay-100" />
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-tech-glow rounded-full animate-bounce delay-200" />
            <div className="absolute top-1/2 right-0 w-1 h-1 bg-art-glow rounded-full animate-bounce delay-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterButton;