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
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel items */}
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {currentItem.image ? (
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                quality={90}
                className="object-cover"
              />
            ) : (
              // Add a gradient background when no image is provided
              <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-blue-900"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/70 to-darker/30 z-10"></div>
          
            {/* Special Effect Layer */}
            {renderEffect()}
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container-custom flex flex-col items-center justify-center text-center">
              <motion.span 
                className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm text-primary rounded-full mb-4 text-sm font-medium border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Eagle Sounds
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 max-w-4xl relative z-30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {currentItem.title}
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl relative z-30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {currentItem.subtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative z-30"
              >
                <Link 
                  href={currentItem.buttonLink} 
                  className="btn-primary hover:scale-105 transition-transform duration-300"
                >
                  {currentItem.buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute z-30 bottom-10 left-0 right-0 flex justify-center items-center space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute z-30 left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-primary/80 rounded-full p-3 text-white transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      
      <button
        className="absolute z-30 right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-primary/80 rounded-full p-3 text-white transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroCarousel;