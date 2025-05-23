'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Special Effect Components
import MusicWaveEffect from './effects/MusicWaveEffect';
import LightingEffect from './effects/LightingEffect';
import SmokeEffect from './effects/SmokeEffect';
import ConfettiEffect from './effects/ConfettiEffect';

type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image?: string; // Make image optional
  effectType?: 'music' | 'light' | 'smoke' | 'confetti' | 'none';
};

type HeroCarouselProps = {
  items: CarouselItem[];
  autoPlayInterval?: number;
};

const HeroCarousel = ({ items, autoPlayInterval = 7000 }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const currentItem = items[currentIndex];

  // Define fadeAnimation object for use in motion components
  const fadeAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
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

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    startAutoPlay();
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    startAutoPlay();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    startAutoPlay();
  };

  // Render the appropriate effect based on the current slide type
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
    <div className="relative h-full overflow-hidden bg-darker">
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-transparent to-darker z-10"></div>
      
      {currentItem.effectType && renderEffect()}
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4"
          {...fadeAnimation}
        >
          {currentItem.title}
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-blue-100/90 max-w-3xl mb-6 sm:mb-8 px-4"
          {...fadeAnimation}
          transition={{ ...fadeAnimation.transition, delay: 0.1 }}
        >
          {currentItem.subtitle}
        </motion.p>
        
        <motion.div
          {...fadeAnimation}
          transition={{ ...fadeAnimation.transition, delay: 0.2 }}
        >
          <Link 
            href={currentItem.buttonLink}
            className="btn-primary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
          >
            {currentItem.buttonText}
          </Link>
        </motion.div>
      </div>
      
      {/* Navigation arrows - made more responsive */}
      <div className="absolute z-30 flex justify-between items-center w-full top-1/2 -translate-y-1/2 px-2 sm:px-4 md:px-8">
        <button 
          onClick={prevSlide} 
          className="bg-primary/20 backdrop-blur-sm hover:bg-primary/40 p-2 sm:p-3 rounded-full transform -translate-x-1 sm:translate-x-0 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-white text-xl sm:text-2xl" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="bg-primary/20 backdrop-blur-sm hover:bg-primary/40 p-2 sm:p-3 rounded-full transform translate-x-1 sm:translate-x-0 transition-all duration-300"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-white text-xl sm:text-2xl" />
        </button>
      </div>
      
      {/* Pagination dots - made more responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 transition-all duration-300 ${
              index === currentIndex ? 'bg-primary scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;