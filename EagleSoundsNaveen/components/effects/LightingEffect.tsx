'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define an interface for flash objects
interface Flash {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const LightingEffect = () => {
  const [isActive, setIsActive] = useState(false);
  // Properly type the flashes state
  const [flashes, setFlashes] = useState<Flash[]>([]);
  
  useEffect(() => {
    setIsActive(true);
    
    // Create random camera flashes instead of full-screen strobe
    const interval = setInterval(() => {
      // Create a new flash with random position
      const newFlash: Flash = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: Math.random() * 80 + 10, // 10% to 90% of screen height
        size: Math.random() * 150 + 100, // Random size between 100-250px
        opacity: Math.random() * 0.3 + 0.5, // Random opacity between 0.5-0.8
      };
      
      // Add the new flash
      setFlashes(prev => [...prev, newFlash]);
      
      // Remove the flash after a short duration
      setTimeout(() => {
        setFlashes(prev => prev.filter(flash => flash.id !== newFlash.id));
      }, 150); // Flash duration - very brief like a camera flash
      
    }, Math.random() * 1000 + 1000); // Random interval between 1-2 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {/* Main light beam sources */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light beam 1 - from top left */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-[150vh] bg-blue-400/30 rounded-full rotate-45 origin-top-left"
          style={{ filter: 'blur(20px)' }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [45, 55, 45]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Light beam 2 - from top right */}
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-[150vh] bg-purple-400/30 rounded-full -rotate-45 origin-top-right"
          style={{ filter: 'blur(20px)' }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            rotate: [-45, -55, -45]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Center spotlight */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[200vh] bg-white/20 rounded-[50%] origin-top"
          style={{ filter: 'blur(15px)' }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scaleX: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Moving spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const colors = ['bg-blue-500/30', 'bg-purple-500/30', 'bg-cyan-500/30', 'bg-pink-500/30', 'bg-green-500/30'];
          return (
            <motion.div
              key={`spotlight-${i}`}
              className={`absolute w-32 h-32 rounded-full ${colors[i]}`}
              style={{ 
                filter: 'blur(20px)',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 7 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      {/* Light beams rotating from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 flex items-center justify-center pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute w-12 h-[90vh] bg-gradient-to-t from-blue-400/50 to-transparent rounded-full origin-bottom"
            style={{
              rotate: i * 60,
              filter: 'blur(8px)'
            }}
            animate={{
              rotate: [i * 60, i * 60 + 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Photography-like camera flashes */}
      {flashes.map(flash => (
        <div 
          key={flash.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${flash.x}%`,
            top: `${flash.y}%`,
            width: `${flash.size}px`,
            height: `${flash.size}px`,
            opacity: flash.opacity,
            filter: 'blur(15px)',
            transform: 'translate(-50%, -50%)',
            animation: 'flash-fade 150ms ease-out forwards',
          }}
        />
      ))}
      
      {/* Light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Lens flare effect */}
      <div className="absolute top-1/3 left-1/3 w-60 h-60 pointer-events-none">
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30"
          style={{ filter: 'blur(20px)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Add a subtle CSS animation for the flash effect */}
      <style jsx global>{`
        @keyframes flash-fade {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default LightingEffect;
