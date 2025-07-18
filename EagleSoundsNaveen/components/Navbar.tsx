'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaMusic, 
  FaCamera, 
  FaBars, 
  FaTimes, 
  FaHeadphones, 
  FaEnvelope, 
  FaHome, 
  FaInfoCircle 
} from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Navigation links data - removed gallery entry
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome className="inline mr-1" /> },
    { path: '/vendor', label: 'Services', icon: <FaMusic className="inline mr-1" /> },
    { path: '/about', label: 'About Us', icon: <FaInfoCircle className="inline mr-1" /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="inline mr-1" /> },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-12 w-auto flex items-center"
          >
            <Image
              src="/Eaglesounds.png"
              alt="Eagle Sounds Logo"
              width={48}
              height={48}
              className="mr-2"
            />
            <motion.span 
              className="ml-2 font-bold text-xl text-white"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary">Eagle</span>Sounds
            </motion.span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              href={link.path} 
              key={link.path}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-primary group ${
                pathname === link.path 
                ? 'text-primary' 
                : 'text-white/90 hover:text-white'
              }`}
            >
              {link.icon}
              {link.label}
              {pathname === link.path && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/book-now" 
              className="ml-2 inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-medium text-sm shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <FaHeadphones className="mr-2" /> 
              Book Now
            </Link>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={`mobile-${link.path}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg flex items-center ${
                    pathname === link.path 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="/book-now"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 mt-2 rounded-full bg-gradient-to-r from-primary to-blue-600 text-center text-white font-medium flex items-center justify-center"
              >
                <FaHeadphones className="mr-2" /> 
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow effect at the bottom of the navbar */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  );
};

export default Navbar;