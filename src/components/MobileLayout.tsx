import React from 'react';
import TrackSection from './TrackSection';
import RegisterButton from './RegisterButton';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const MobileLayout = () => {
  return (
    <div className="lg:hidden">
      {/* Mobile Hero */}
      <section className="relative min-h-screen flex flex-col pb-32"> {/* Added pb-32 for spacing */}
        {/* Track 1 - Top Half */}
        <div className="h-1/2 relative">
          <TrackSection type="tech" />
        </div>
        
        {/* Track 2 - Bottom Half */}
        <div className="h-1/2 relative">
          <TrackSection type="art" />
        </div>
        
        {/* Mobile Register Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <Button className="bg-register-gradient px-6 py-3 text-base font-orbitron font-bold rounded-full">
            REGISTER NOW
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>
    </div>
  );
};

export default MobileLayout;