'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MusicWaveEffect = () => {
  const [isActive, setIsActive] = useState(false);
  
  // Start the animation after component mounts
  useEffect(() => {
    setIsActive(true);
  }, []);
  
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {/* Bottom audio waves - more pronounced */}
      <div className="absolute bottom-0 left-0 right-0 h-28 flex items-end justify-center pointer-events-none">
        <div className="flex items-end justify-center w-full gap-[2px] z-20">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-t-full bg-gradient-to-b from-primary to-primary/20"
              initial={{ height: 3 }}
              animate={{ 
                height: isActive ? [
                  3, 
                  Math.random() * 50 + 5 * (i % 4 === 0 ? 2 : 1), 
                  3
                ] : 3,
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.02
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Left side vertical equalizer */}
      <div className="absolute left-10 top-1/4 bottom-1/4 w-16 flex items-center justify-between rotate-180 pointer-events-none">
        <div className="flex flex-col items-center justify-center h-full gap-1">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-primary"
              initial={{ width: 5 }}
              animate={{ 
                width: isActive ? [
                  5, 
                  Math.random() * 60 + 10,
                  5
                ] : 5,
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Right side vertical equalizer */}
      <div className="absolute right-10 top-1/4 bottom-1/4 w-16 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col items-center justify-center h-full gap-1">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
              initial={{ width: 5 }}
              animate={{ 
                width: isActive ? [
                  5, 
                  Math.random() * 60 + 10,
                  5
                ] : 5,
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating music particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              backgroundColor: Math.random() > 0.5 ? '#3b82f6' : '#10b981',
              opacity: 0.6,
            } as React.CSSProperties}
            animate={{
              y: [0, -100 - Math.random() * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.7, 0],
              scale: [1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Center pulsing circle */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '300px',
          height: '300px',
          filter: 'blur(40px)'
        } as React.CSSProperties}
      />
    </div>
  );
};

export default MusicWaveEffect;
