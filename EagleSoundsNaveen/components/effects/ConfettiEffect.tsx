'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaMusic, FaBolt, FaSnowflake } from 'react-icons/fa';
import { GiPartyPopper, GiDiamonds, GiSparkles } from 'react-icons/gi';

// Define a type for the confetti shapes
type ConfettiShapeType = {
  component: React.ElementType | string;
  className?: string;
  style?: React.CSSProperties;
};

const ConfettiEffect = () => {
  const [isActive, setIsActive] = useState(false);
  
  // Start the animation after component mounts
  useEffect(() => {
    setIsActive(true);
  }, []);
  
  // Create confetti pieces with different colors
  const confettiColors = [
    '#FF5252', // red
    '#FF9800', // orange
    '#FFEB3B', // yellow
    '#4CAF50', // green
    '#2196F3', // blue
    '#9C27B0', // purple
    '#E91E63', // pink
  ];

  // Array of confetti shape components
  const confettiShapes: ConfettiShapeType[] = [
    { component: FaStar },
    { component: FaHeart },
    { component: FaBolt },
    { component: FaMusic },
    { component: GiDiamonds },
    { component: GiSparkles },
    { component: FaSnowflake },
    { component: GiPartyPopper },
    { 
      component: 'div',
      className: 'w-full h-full',
      style: { 
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'  // Diamond shape
      }
    },
    { 
      component: 'div',
      className: 'w-full h-full',
      style: { 
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'  // Pentagon shape
      }
    },
    { 
      component: 'div',
      className: 'w-full h-full',
      style: { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 25%, 0% 75%)'  // Ribbon/streamer shape
      }
    },
    { 
      component: 'div',
      className: 'w-full h-full',
      style: { 
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'  // Hexagon shape
      }
    },
    { 
      component: 'div',
      className: 'w-full h-full',
      style: { 
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'  // Trapezoid shape
      }
    },
  ];
  
  // Function to render confetti piece based on shape
  const renderConfettiPiece = (shape: ConfettiShapeType, color: string, size: number, key: string | number) => {
    const ShapeComponent = shape.component;
    
    if (typeof ShapeComponent === 'string') {
      return (
        <div
          className={shape.className}
          style={{ 
            ...shape.style,
            backgroundColor: color,
          }}
        />
      );
    }
    
    return <ShapeComponent color={color} size={size} />;
  };

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Generate falling confetti pieces */}
      {[...Array(100)].map((_, i) => {
        const color = confettiColors[i % confettiColors.length];
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        const size = Math.random() * 15 + 10; // Size between 10-25px
        const initialX = Math.random() * 100; // Random horizontal position
        const initialDelay = Math.random() * 20; // Random delay for natural effect
        
        return (
          <motion.div
            key={`confetti-${i}`}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: '-5%',
              opacity: 0,
            }}
            animate={isActive ? {
              y: ['-5%', '100%'],
              x: [0, (Math.random() - 0.5) * 200], // Move randomly left/right as falling
              rotate: [0, Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1)], // Spin
              opacity: [0, 0.8, 0], // Fade in and out
            } : {}}
            transition={{
              duration: 5 + Math.random() * 5, // Duration between 5-10 seconds
              ease: "easeOut",
              delay: initialDelay,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
          >
            {renderConfettiPiece(shape, color, size, i)}
          </motion.div>
        );
      })}
      
      {/* Add some floating confetti for slower, drifting effect */}
      {[...Array(30)].map((_, i) => {
        const color = confettiColors[i % confettiColors.length];
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        const size = Math.random() * 18 + 12; // Slightly larger floating pieces
        
        return (
          <motion.div
            key={`floating-confetti-${i}`}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 150],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              ease: "easeInOut",
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          >
            {renderConfettiPiece(shape, color, size, `floating-${i}`)}
          </motion.div>
        );
      })}
      
      {/* Add a subtle color overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/5"
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
};

export default ConfettiEffect;
