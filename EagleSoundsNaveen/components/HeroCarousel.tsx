'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight, FaChevronLeft, FaPlay, FaStar } from 'react-icons/fa';

// Special Effect Components
import MusicWaveEffect from './effects/MusicWaveEffect';
import LightingEffect from './effects/LightingEffect';
import SmokeEffect from './effects/SmokeEffect';
import ConfettiEffect from './effects/ConfettiEffect';

type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  effectType?: 'music' | 'light' | 'smoke' | 'confetti' | 'none';
  stats?: { value: string; label: string }[];
};

type HeroCarouselProps = {
  items: CarouselItem[];
  autoPlayInterval?: number;
};

const HeroCarousel = ({ items, autoPlayInterval = 8000 }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const currentItem = items[currentIndex];

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isAnimating, autoPlayInterval]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoPlay();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
    startAutoPlay();
  };

  // Enhanced text animations
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      filter: "blur(10px)",
      transition: { duration: 0.4 }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(5px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateY: -45
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  // Render the appropriate effect
  const renderEffect = () => {
    if (!currentItem.effectType) return null;
    
    switch (currentItem.effectType) {
      case 'music':
        return <MusicWaveEffect />;
      case 'light':
        return <LightingEffect />;
      case 'smoke':
        return <SmokeEffect />;
      case 'confetti':
        return <ConfettiEffect />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="relative h-full overflow-hidden bg-gradient-to-br from-darker via-dark to-blue-900"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-darker/90 via-transparent to-darker/90 z-10"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, transparent 50%, rgba(15, 23, 42, 0.9) 100%)",
            "linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 0%, transparent 50%, rgba(15, 23, 42, 0.7) 100%)",
            "linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, transparent 50%, rgba(15, 23, 42, 0.9) 100%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Interactive particles */}
      <FloatingParticles />
      
      {/* Effect overlay */}
      {currentItem.effectType && renderEffect()}
      
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Title with enhanced animations */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 relative"
              variants={titleVariants}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00BFFF 50%, #ffffff 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {currentItem.title}
              
              {/* Glowing text effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-20 filter blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-blue-100/90 font-light mb-4 sm:mb-6 max-w-3xl mx-auto"
              variants={subtitleVariants}
            >
              {currentItem.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-blue-100/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={descriptionVariants}
            >
              {currentItem.description}
            </motion.p>

            {/* Stats if available */}
            {currentItem.stats && (
              <motion.div 
                className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {currentItem.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm sm:text-base text-blue-100/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              variants={buttonVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={currentItem.buttonLink}
                  className="group relative bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden flex items-center"
                >
                  <span className="relative z-10 mr-2">{currentItem.buttonText}</span>
                  <FaPlay className="text-sm group-hover:translate-x-1 transition-transform" />
                  
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {currentItem.secondaryButtonText && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={currentItem.secondaryButtonLink || '#'}
                    className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">{currentItem.secondaryButtonText}</span>
                    <FaStar className="text-sm group-hover:rotate-12 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Enhanced navigation arrows */}
      <div className="absolute z-30 flex justify-between items-center w-full top-1/2 -translate-y-1/2 px-4 sm:px-8">
        <motion.button 
          onClick={prevSlide} 
          className="group bg-primary/20 backdrop-blur-md hover:bg-primary/40 p-3 sm:p-4 rounded-full border border-primary/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-white text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform" />
        </motion.button>
        
        <motion.button 
          onClick={nextSlide} 
          className="group bg-primary/20 backdrop-blur-md hover:bg-primary/40 p-3 sm:p-4 rounded-full border border-primary/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FaChevronRight className="text-white text-xl sm:text-2xl group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      
      {/* Enhanced pagination */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-30 flex justify-center">
        <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-primary/30">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-primary' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: autoPlayInterval / 1000, 
            ease: "linear",
            repeat: Infinity 
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;