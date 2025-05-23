'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaWhatsapp,
  FaYoutube,
  FaGoogle,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 filter blur-3xl"></div>
      </div>

      <div className="border-t border-blue-900/30">
        {/* Main Footer Content */}
        <div className="container-custom py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <div className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Eagle Sounds Logo"
                      width={60}
                      height={60}
                      className="mr-3"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-white">Eagle <span className="text-primary">Sounds</span></h2>
                      <p className="text-sm text-blue-300">Premium Event Services</p>
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-blue-100/70 mb-6">
                Professional DJ services, lighting solutions, photography, and event management for weddings, parties, corporate events, and more.
              </p>

              <p className="text-white font-medium">Tholusuri Naveen</p>
              
              {/* Social Media Links */}
              <div className="mt-4 flex space-x-3">
                <a href="https://www.instagram.com/eagle__sounds/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-primary transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://www.instagram.com/naveen_tholuchuri_/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-primary transition-colors">
                  <FaInstagram className="text-xl" />
                  <span className="sr-only">Owner's Instagram</span>
                </a>
                <a href="https://www.youtube.com/@eagledjsounds" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-primary transition-colors">
                  <FaYoutube className="text-xl" />
                </a>
                <a href="https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-primary transition-colors">
                  <FaWhatsapp className="text-xl" />
                </a>
                <a href="https://www.facebook.com/eagle.sounds.2025/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-primary transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative before:content-[''] before:absolute before:w-10 before:h-1 before:bg-primary before:-bottom-2">
                Our Services
              </h3>
              
              <ul className="space-y-3">
                {[
                  { name: 'DJ Services', href: '/vendor#dj' },
                  { name: 'Photography', href: '/vendor#photos' },
                  { name: 'Lighting Solutions', href: '/vendor#lighting' },
                  { name: 'Smoke Effects', href: '/vendor#smoke' },
                  { name: 'Event Decorations', href: '/vendor#decorations' }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-blue-100/70 hover:text-primary transition-colors flex items-center"
                    >
                      <div className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative before:content-[''] before:absolute before:w-10 before:h-1 before:bg-primary before:-bottom-2">
                Quick Links
              </h3>
              
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Services', href: '/vendor' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Testimonials', href: '/about#testimonials' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-blue-100/70 hover:text-primary transition-colors flex items-center"
                    >
                      <div className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative before:content-[''] before:absolute before:w-10 before:h-1 before:bg-primary before:-bottom-2">
                Get In Touch
              </h3>
              
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:Naveencandc4689@gmail.com" 
                    className="text-blue-100/70 hover:text-primary transition-colors flex items-start"
                  >
                    <FaEnvelope className="mr-3 mt-1 text-primary" />
                    <span>Naveencandc4689@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+918121525235" 
                    className="text-blue-100/70 hover:text-primary transition-colors flex items-start"
                  >
                    <FaPhone className="mr-3 mt-1 text-primary" />
                    <span>+91 8121525235</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps?q=16.222400,80.517117" 
                    className="text-blue-100/70 hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Guntur, Andhra Pradesh, India</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-blue-900/30 py-6 relative z-10">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-100/70 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Eagle Sounds. All rights reserved. Founded by Tholusuri Naveen.
              </p>
              
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-blue-100/70 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-blue-100/70 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-primary hover:bg-accent text-white p-3 rounded-full absolute bottom-6 right-6 z-20 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;