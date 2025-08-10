import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Palette, ArrowRight } from 'lucide-react';
import techBg from '@/assets/tech-bg.jpg';
import artBg from '@/assets/art-bg.jpg';
import insight from '@/assets/insight.png';
interface TrackSectionProps {
  type: 'tech' | 'art';
}

const TrackSection: React.FC<TrackSectionProps> = ({ type }) => {
  const isTech = type === 'tech';
  
  return (
    <div className={`relative h-full w-full overflow-hidden ${isTech ? 'tech-grid tech-particles' : 'art-waves art-orbs'}`}>
      {/* Background Image */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '204px', // Typical navbar height
        }}
      >
        <img src={insight} alt="Centered Image" style={{ height: '40px' }} />
      </div> */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${isTech ? techBg : artBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div/>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center p-4 sm:p-8 lg:p-16"> {/* Responsive padding */}
        <div className={`mb-6 p-3 rounded-full ${isTech ? 'bg-tech-primary/20' : 'bg-art-primary/20'} backdrop-blur-sm`}>
          {isTech ? (
            <Eye className={`w-10 h-10 ${isTech ? 'text-tech-accent' : 'text-art-accent'}`} />
          ) : (
            <Palette className={`w-10 h-10 text-art-accent`} />
          )}
        </div>
        
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-bold mb-4 ${isTech ? 'text-tech-glow' : 'text-art-glow'}`}>
          Track {isTech ? '1' : '2'}
        </h2>
        
        <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-semibold mb-4 text-foreground">
          {isTech ? 'Computer Vision Hackathon' : 'Poster Making Competition'}
        </h3>
        
        <p className="text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-lg mb-6 leading-relaxed">
          {isTech 
            ? "Dive into the world of computer vision! Solve real-world challenges in healthcare, security, environment, and more using cutting-edge AI algorithms."
            : "Unleash your imagination! Craft stunning AI-generated posters with the power of prompt engineering and creativity."
          }
        </p>
        
        <div className="space-y-3 text-xs sm:text-sm lg:text-base ">
          {isTech ? (
            <>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-tech-accent" />
                <span>Image Classification & Object Detection</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-tech-accent" />
                <span>Medical Imaging & Diagnostics</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-tech-accent" />
                <span>Security & Surveillance Systems</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-art-accent" />
                <span>AI-Powered Poster Generation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-art-accent" />
                <span>Advanced Prompt Engineering</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4 text-art-accent" />
                <span>Creative AI Art Techniques</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackSection;