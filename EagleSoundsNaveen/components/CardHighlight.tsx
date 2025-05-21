'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardHighlightProps {
  children: React.ReactNode;
}

export default function CardHighlight({ children }: CardHighlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Handle mouse movement to create the highlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-gradient-to-br from-darker to-dark border border-blue-900/20 hover:border-primary/30 transition-all duration-300 shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Dynamic highlight effect */}
      {hovered && (
        <motion.div
          className="absolute pointer-events-none w-full h-full"
          animate={{
            background: [
              `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 191, 255, 0.1) 0%, rgba(0, 0, 0, 0) 80%)`
            ]
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Subtle blue border glow */}
      {hovered && (
        <motion.div 
          className="absolute -inset-px rounded-xl pointer-events-none opacity-0"
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          style={{
            background: 'linear-gradient(90deg, #00BFFF, #0047AB, #39FF14, #00BFFF)',
            backgroundSize: '300% 100%',
            animation: 'move-gradient 2s linear infinite'
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes move-gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
