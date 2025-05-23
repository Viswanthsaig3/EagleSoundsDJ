'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMusic, FaLightbulb, FaCamera, FaSmog, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// Service data - Update to ensure all images exist
const services = [
  {
    id: 1,
    title: 'DJ Services',
    description: 'Our professional DJ services cater to various events with high-quality sound systems and experienced DJs who know how to keep your crowd energized.',
    icon: <FaMusic className="text-primary text-3xl" />,
    link: '/vendor#dj',
    image: '/dj-service.jpg', // Ensure this file exists
  },
  {
    id: 2,
    title: 'Lighting Solutions',
    description: 'Transform your venue with our professional lighting solutions for indoor and outdoor events, creating the perfect atmosphere for your celebration.',
    icon: <FaLightbulb className="text-primary text-3xl" />,
    link: '/vendor#lighting',
    image: '/lighting-service.jpg',
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Capture your special moments with our professional photography services for various occasions, from weddings and birthdays to corporate events.',
    icon: <FaCamera className="text-primary text-3xl" />,
    link: '/vendor#photos',
    image: '/photo-service.jpg',
  },
  {
    id: 4,
    title: 'Smoke Effects',
    description: 'Create dramatic atmosphere and enhance your lighting with our professional smoke, fog, and haze machines for any event.',
    icon: <FaSmog className="text-primary text-3xl" />,
    link: '/vendor#smoke',
    image: '/smoke-service.jpg',
  },
];

// Enhanced home page component
export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Carousel items for hero section
  const carouselItems = [
    {
      id: 1,
      title: 'Premium DJ Services',
      subtitle: 'Creating unforgettable experiences for every event',
      buttonText: 'Explore DJ Services',
      buttonLink: '/vendor#dj',
      effectType: 'music' as const
    },
    {
      id: 2,
      title: 'Professional Photography',
      subtitle: 'Capturing your precious moments perfectly',
      buttonText: 'Discover Photography',
      buttonLink: '/vendor#photos',
      effectType: 'light' as const
    },
    {
      id: 3,
      title: 'Atmospheric Smoke Effects',
      subtitle: 'Add drama and excitement to your events',
      buttonText: 'See Smoke Effects',
      buttonLink: '/vendor#smoke',
      effectType: 'smoke' as const
    },
    {
      id: 4,
      title: 'Complete Event Solutions',
      subtitle: 'Everything you need for a perfect celebration',
      buttonText: 'View All Services',
      buttonLink: '/vendor',
      effectType: 'confetti' as const
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative h-screen">
        <HeroCarousel items={carouselItems} />
      </section>
      
      {/* Welcome Section with Animation */}
      <section className="py-20 bg-gradient-to-b from-darker to-dark relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="heading-xl mb-6">
              Welcome to <span className="text-primary">Eagle Sounds</span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-10">
              With over 10 years of experience, Eagle Sounds provides premium entertainment and event services in the region. 
              From professional DJ setups and atmospheric lighting to stunning photography, 
              we deliver unforgettable experiences for weddings, birthdays, corporate events, and more.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 filter blur-3xl"></div>
      </section>
      
      {/* Services Section with Enhanced Cards */}
      <section className="py-24 bg-dark relative overflow-hidden" id="services" ref={ref}>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-lg mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto">
              Discover our wide range of professional event services designed to make your celebration perfect.
              From music to visuals, we've got you covered.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-darker rounded-xl overflow-hidden shadow-lg border border-blue-900/20 group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-primary/80 p-3 rounded-full backdrop-blur-sm shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-blue-100/70 mb-4 sm:mb-5 flex-grow">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center justify-center sm:justify-start text-primary hover:text-white px-4 py-2 rounded-lg border border-primary hover:bg-primary transition-all duration-300 w-full sm:w-auto"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-blue-600/5 filter blur-3xl"></div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-darker to-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">Why Choose <span className="text-primary">Eagle Sounds</span>?</h2>
              <p className="text-blue-100/80 mb-8">
                With years of experience in the entertainment and event industry, we deliver quality services 
                customized to your specific needs. Our team of professionals ensures that your event becomes memorable.
              </p>
              
              <div className="space-y-5">
                {[
                  { title: "Professional Equipment", description: "State-of-the-art sound systems, lighting rigs, and the latest technology" },
                  { title: "Experienced Team", description: "Skilled DJs, photographers, and event specialists with years of experience" },
                  { title: "Custom Solutions", description: "Personalized packages tailored to match your vision and budget" },
                  { title: "Reliable Service", description: "Punctual, professional, and committed to exceeding expectations" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-blue-100/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden">
                <Image 
                  src="/why-choose-us.jpg" 
                  alt="Eagle Sounds Event" 
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw" // Added sizes 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 backdrop-blur-sm text-white p-6 rounded-xl max-w-md text-center shadow-xl">
                    <h3 className="text-xl font-bold mb-2">100% Client Satisfaction</h3>
                    <p>Join hundreds of satisfied clients who have experienced our premium services.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-darker to-dark relative overflow-hidden">
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12 border border-primary/20">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Create an <span className="text-primary">Unforgettable Event</span>?
              </motion.h2>
              
              <motion.p 
                className="text-blue-100/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Contact us today to discuss your event needs and get a customized quote. 
                Let's work together to make your next event spectacular!
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  Contact Us
                </Link>
                <Link href="/vendor" className="btn-secondary w-full sm:w-auto">
                  Explore Services
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-white font-medium mb-3">Connect with us</p>
                <div className="flex justify-center space-x-5">
                  <a 
                    href="https://www.instagram.com/eagle__sounds/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-2 rounded-full transition-colors"
                    title="Follow Eagle Sounds on Instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@eagledjsounds" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-full transition-colors"
                    title="Subscribe to Eagle Sounds on YouTube"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="text-2xl" />
                  </a>
                  <a 
                    href="https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-500 hover:text-white hover:bg-green-500 p-2 rounded-full transition-colors"
                    title="Join Eagle Sounds WhatsApp Channel"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                  <a 
                    href="https://www.facebook.com/eagle.sounds.2025/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 rounded-full transition-colors"
                    title="Like Eagle Sounds on Facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 filter blur-3xl"></div>
      </section>
    </>
  );
}