'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  // Reset scroll position when component mounts
  useEffect(() => {
    // Prefetch important pages for faster navigation
    const prefetchLinks = ['/vendor', '/about', '/'];
    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
    
    window.scrollTo(0, 0);
  }, []);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
  
  // Audio visualizer component
  const AudioWave = () => (
    <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
      <div className="flex items-end justify-center h-full gap-1">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary/50"
            initial={{ height: 3 }}
            animate={{ 
              height: [3, Math.random() * 30 + 5, 3],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05
            }}
          />
        ))}
      </div>
    </div>
  );
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 hero-gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/contact-hero.jpg" 
            alt="Contact Eagle Sounds" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Overlay effects */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-600/10 filter blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="glow-text">Us</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-white/90 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're here to answer any questions you may have about our services.
              Reach out to us and we'll respond as soon as we can.
            </motion.p>
          </div>
        </div>
        
        {/* Audio wave at bottom */}
        <AudioWave />
      </section>
      
      {/* Contact Information + Form Section */}
      <section className="section-padding section-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="heading-lg mb-6 text-white">Get <span className="emphasis-text">In Touch</span></h2>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="flex items-start dark-card group p-4"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 text-white">Phone</h3>
                    <p className="text-blue-100/70 mb-1">Call us directly:</p>
                    <a href="tel:+918121525235" className="text-primary hover:text-accent transition-colors">
                      +91 8121525235
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start dark-card group p-4"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-green-500/10 p-3 rounded-full mr-4 group-hover:bg-green-500/20 transition-colors">
                    <FaWhatsapp className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 text-white">WhatsApp</h3>
                    <p className="text-blue-100/70 mb-1">Chat with us on WhatsApp:</p>
                    <a 
                      href="https://wa.me/918121525235" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 transition-colors"
                    >
                      +91 8121525235
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start dark-card group p-4"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 text-white">Email</h3>
                    <p className="text-blue-100/70 mb-1">Send us an email:</p>
                    <a href="mailto:info@eaglesounds.com" className="text-primary hover:text-accent transition-colors">
                      info@eaglesounds.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start dark-card group p-4"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 text-white">Location</h3>
                    <p className="text-blue-100/70 mb-1">Find us on the map:</p>
                    <a 
                      href="https://goo.gl/maps/eaglesounds" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="pt-6 border-t border-blue-900/20">
                <h3 className="font-display font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/eagle__sounds/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/10 p-3 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a 
                    href="https://www.instagram.com/naveen_tholuchuri_/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/10 p-3 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaInstagram className="text-xl" />
                    <span className="sr-only">Owner's Instagram</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@eagledjsounds" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500/10 p-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                  <a 
                    href="https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500/10 p-3 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a 
                    href="https://www.facebook.com/eagle.sounds.2025/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 p-3 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div 
                className="dark-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="heading-lg mb-6 text-white">Send Us a <span className="emphasis-text">Message</span></h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    <p>{formStatus.message}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-blue-100">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-100">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-blue-100">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                        placeholder="+91 8121525235"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventType" className="block mb-2 text-sm font-medium text-blue-100">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                      >
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="college">College Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block mb-2 text-sm font-medium text-blue-100">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-blue-100">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-darker border border-blue-900/30 focus:border-primary focus:ring-1 focus:ring-primary text-light focus:outline-none transition-colors"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto relative overflow-hidden group"
                    >
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 text-white">Frequently <span className="emphasis-text">Asked Questions</span></h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto">
              Find answers to common questions about our services and booking process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="dark-card">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">How far in advance should I book your services?</h3>
              <p className="text-blue-100/70">
                We recommend booking at least 2-3 months in advance for weddings and major events, 
                and 3-4 weeks for smaller events. Popular dates can fill up quickly, especially 
                during wedding season.
              </p>
            </div>
            
            <div className="dark-card">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">Do you require a deposit to secure a booking?</h3>
              <p className="text-blue-100/70">
                Yes, we require a 30% deposit to secure your booking date. The remaining balance 
                is due one week before the event. We accept various payment methods including 
                bank transfers and online payments.
              </p>
            </div>
            
            <div className="dark-card">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">Can we meet with the DJ before our event?</h3>
              <p className="text-blue-100/70">
                Absolutely! We encourage meeting your DJ before the event to discuss your music 
                preferences, timeline, and any special requests. This can be done in person or 
                via video call.
              </p>
            </div>
            
            <div className="dark-card">
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">What areas do you service?</h3>
              <p className="text-blue-100/70">
                We primarily serve [Your City] and surrounding areas within a 100km radius. 
                For events beyond this area, additional travel charges may apply. Contact us 
                for more information about your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary opacity-30"></div>
        
        {/* Audio wave overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          <div className="flex items-end justify-center h-full gap-1">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary"
                initial={{ height: 3 }}
                animate={{ 
                  height: [3, Math.random() * 60 + 10, 3],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-lg mb-6 text-white">Ready to <span className="emphasis-text">Get Started</span>?</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto mb-8">
            Let us make your event special with our professional DJ services and event solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="btn-primary">
              Contact Now
            </a>
            <Link href="/vendor" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}