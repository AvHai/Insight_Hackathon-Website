import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import TrackSection from '@/components/TrackSection';
import RegisterButton from '@/components/RegisterButton';
import MobileLayout from '@/components/MobileLayout';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      {/* Mobile Layout */}
      <MobileLayout />
      
      {/* Desktop Hero Section - Split Screen */}
      <main className="hidden lg:block relative h-screen">

        <div className="flex h-full">
          {/* Left Side - Computer Vision Track */}
          <div 
            className="w-1/2 relative"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <TrackSection type="tech" />
          </div>
          
          {/* Right Side - Poster Making Track */}
          <div 
            className="w-1/2 relative"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <TrackSection type="art" />
          </div>
          
          {/* Central Register Button */}
          <RegisterButton />
          
          {/* Split Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent z-30" />
        </div>
      </main>
      
      {/* Additional Content Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-2 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6 sm:mb-8 text-foreground">
            Join the Future of AI Innovation
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl sm:max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Whether you're passionate about computer vision algorithms or creative AI art generation, 
            our hackathon offers the perfect platform to showcase your skills, learn from experts, 
            and connect with like-minded innovators from around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl md:max-w-6xl mx-auto">
            <div className="glass p-8 rounded-2xl">
              <div className="text-3xl font-bold text-tech-glow mb-2 mt-4">19th September,2025</div>
            </div>
            
            <div className="glass p-8 rounded-2xl">
              <div className="text-3xl font-bold text-art-glow mb-2 mt-8">Free Registration!!</div>
            </div>
            
            <div className="glass p-8 rounded-2xl">
              <div className="text-3xl font-bold text-tech-glow mb-2 mt-8">Win Cash Prizes!</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
