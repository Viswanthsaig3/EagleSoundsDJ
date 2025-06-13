'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* You can add subtle background patterns or shapes here */}
      </div>
      

      <div className="border-t border-blue-900/30">
        
        <div className="container-custom py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <div className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Eagle Sounds Logo Guntur"
                      width={60}
                      height={60}
                      className="mr-3"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-white">Eagle <span className="text-primary">Sounds</span></h2>
                      <p className="text-sm text-blue-300">Premium Event Services in Guntur</p>
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-blue-100/70 mb-6">
                Professional DJ services, lighting solutions, photography, and event management for weddings, parties, corporate events, and more in Guntur. Your best choice for DJ services in Guntur.
              </p>

              <p className="text-white font-medium mb-2">Tholusuri Naveen</p>
              <div className="text-blue-100/70 text-sm">
                <div className="flex items-start mb-2">
                  <FaMapMarkerAlt className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Your Business Address, Guntur, Andhra Pradesh, Your Pincode</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhone className="text-primary mr-2" />
                  <a href="tel:+918121525235" className="hover:text-primary">+91 8121525235</a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-2" />
                  <a href="mailto:Naveencandc4689@gmail.com" className="hover:text-primary truncate">Naveencandc4689@gmail.com</a>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-6 flex space-x-4">
                <a href="https://www.instagram.com/eagle__sounds/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-primary transition-colors" aria-label="Instagram">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.youtube.com/@eagledjsounds" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-primary transition-colors" aria-label="YouTube">
                  <FaYoutube size={22} />
                </a>
                <a href="https://wa.me/918121525235" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-primary transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp size={22} />
                </a>
                <a href="https://www.facebook.com/eagle.sounds.2025/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-primary transition-colors" aria-label="Facebook">
                  <FaFacebook size={22} />
                </a>
                 <a href="https://www.instagram.com/naveen_tholuchuri_/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-primary transition-colors" aria-label="Owner's Instagram">
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-100/70 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-blue-100/70 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/vendor" className="text-blue-100/70 hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-blue-100/70 hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/#faq" className="text-blue-100/70 hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="/vendor#dj" className="text-blue-100/70 hover:text-primary transition-colors">DJ Services in Guntur</Link></li>
                <li><Link href="/vendor#lighting" className="text-blue-100/70 hover:text-primary transition-colors">Lighting Solutions</Link></li>
                <li><Link href="/vendor#photos" className="text-blue-100/70 hover:text-primary transition-colors">Photography</Link></li>
                <li><Link href="/vendor#smoke" className="text-blue-100/70 hover:text-primary transition-colors">Smoke Effects</Link></li>
                <li><Link href="/vendor#sound" className="text-blue-100/70 hover:text-primary transition-colors">Sound Systems</Link></li>
              </ul>
            </div>
            

            {/* Newsletter/Contact Prompt */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
              <p className="text-blue-100/70 mb-4">
                Get in touch for the best DJ experience in Guntur. Let's make your event unforgettable!
              </p>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Book Best DJ in Guntur
              </Link>
            </div>
            
          </div>
        </div>
        
        
        {/* Copyright */}
        <div className="py-6 border-t border-blue-900/20">
          <div className="container-custom text-center text-blue-100/60 text-sm">
            <p>&copy; {currentYear} Eagle Sounds Guntur. All Rights Reserved. Designed by Eagle Sounds.</p>
            <p className="mt-1">
              Your Premier Choice for the Best DJ in Guntur, Andhra Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-24 bg-primary/10 rounded-full filter blur-3xl pointer-events-none"></div>
      
    </footer>
  );
};

export default Footer;