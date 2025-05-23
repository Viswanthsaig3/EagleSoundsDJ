'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SmokeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    // Smoke particles
    class SmokeParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeRate: number;
      
      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight + Math.random() * 100;
        this.size = Math.random() * 100 + 50;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = -Math.random() * 3 - 1;
        this.opacity = Math.random() * 0.4;
        this.fadeRate = Math.random() * 0.001 + 0.0005;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.opacity > 0) {
          this.opacity -= this.fadeRate;
        }
        
        this.size += 0.3;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        const baseColor = Math.random() > 0.5 ? '120, 150, 255' : '220, 220, 255';
        gradient.addColorStop(0, `rgba(${baseColor}, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(${baseColor}, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${baseColor}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particles: SmokeParticle[] = [];
    
    // Generate initial particles
    for (let i = 0; i < 15; i++) {
      particles.push(new SmokeParticle(canvas.width, canvas.height));
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles at a controlled rate
      if (Math.random() < 0.1) {
        particles.push(new SmokeParticle(canvas.width, canvas.height));
      }
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Remove faded particles
        if (particles[i].opacity <= 0 || particles[i].y < -200) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Canvas for smoke animation */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Additional smoke layers */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`smoke-layer-${i}`}
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/smoke-texture.png)',
              backgroundSize: `${100 + i * 30}%`,
              opacity: 0.15,
              filter: 'blur(8px)',
            }}
            animate={{
              backgroundPosition: [`${i * 10}% 0%`, `${i * 10 + 100}% 100%`],
              x: [i * 10, i * -10],
              y: [i * 10, i * -10],
            }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(80,120,255,0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(15px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating smoke particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute rounded-full bg-blue-300/20"
            style={{
              width: 20 + Math.random() * 80,
              height: 20 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(15px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * -100],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SmokeEffect;
