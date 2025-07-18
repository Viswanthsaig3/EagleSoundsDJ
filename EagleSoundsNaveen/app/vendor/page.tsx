'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaMusic, FaLightbulb, FaCamera, FaPeopleCarry, FaUniversity, 
  FaChevronRight, FaHeadphones, FaMicrophone, FaBirthdayCake, 
  FaRing, FaChevronDown, FaStar, FaSmog, FaInstagram, FaYoutube,
  FaWhatsapp, FaFacebook, FaSprayCan, FaVoteYea, FaCalendarAlt // Added FaSprayCan for Smoke/Fog, FaVoteYea for Political events, FaCalendarAlt for All types of events
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// DJ Services
const djServices = [
  {
    id: 1,
    title: 'Wedding DJ',
    description: 'Create unforgettable memories with our professional wedding DJ services tailored to your special day.',
    icon: <FaMusic className="text-2xl text-primary" />,
    image: '/dj-wedding.jpg',
    features: ['Professional equipment', 'Custom playlists'],
  },
  {
    id: 2,
    title: 'Roadside Shows',
    description: 'High-energy roadside performances with powerful sound systems and engaging DJs.',
    icon: <FaPeopleCarry className="text-2xl text-primary" />,
    image: '/dj-roadshow.jpg',
    features: ['High-power sound', 'Crowd engagement'],
  },
  {
    id: 3,
    title: 'Live Shows',
    description: 'Live performance setups with quality sound equipment and professional mixing.',
    icon: <FaMicrophone className="text-2xl text-primary" />,
    image: '/dj-live.jpg',
    features: ['Live mixing', 'Sound engineering'],
  },
  {
    id: 4,
    title: 'College Events',
    description: 'Energize your college festivals and functions with our specialized college event DJ services.',
    icon: <FaUniversity className="text-2xl text-primary" />,
    image: '/dj-college.jpg',
    features: ['Trending music', 'College-friendly packages'],
  },
  {
    id: 5,
    title: 'Political Events',
    description: 'Professional DJ services for political rallies, campaigns, and government functions with appropriate sound systems.',
    icon: <FaVoteYea className="text-2xl text-primary" />,
    image: '/dj-political.jpg',
    features: ['High-power sound', 'Professional presentation'],
  },
  {
    id: 6,
    title: 'All Types of Events',
    description: 'Comprehensive DJ services for any type of event - from private parties to corporate functions and community gatherings.',
    icon: <FaCalendarAlt className="text-2xl text-primary" />,
    image: '/dj-all-events.jpg',
    features: ['Versatile services', 'Custom packages'],
  },
];

// Photo Services
const photoServices = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capture the beautiful moments of your wedding day with our professional photography services.',
    icon: <FaRing className="text-2xl text-primary" />,
    image: '/photo-wedding.jpg',
    features: ['Candid shots', 'Album design'],
  },
  {
    id: 2,
    title: 'Birthday Photography',
    description: 'Celebrate your special day with our expert birthday photography services.',
    icon: <FaBirthdayCake className="text-2xl text-primary" />,
    image: '/photo-birthday.jpg',
    features: ['Themed shoots', 'Quick delivery'],
  },
  {
    id: 3,
    title: 'Party Photography',
    description: 'Keep the memories of your party alive with our vibrant party photography.',
    icon: <FaCamera className="text-2xl text-primary" />,
    image: '/photo-party.jpg',
    features: ['Action shots', 'Group photos'],
  },
  {
    id: 4,
    title: 'Corporate Event Photography',
    description: 'Professional photography for corporate events, conferences, and business functions.',
    icon: <FaCamera className="text-2xl text-primary" />, // Consider a more corporate icon like FaBriefcase if available and appropriate
    image: '/photo-corporate.jpg',
    features: ['Professional editing', 'Brand-focused'],
  },
];

// Lighting Services
const lightingServices = [
  {
    id: 1,
    title: 'Indoor Lighting',
    description: 'Transform any indoor venue with our atmospheric and elegant lighting solutions.',
    icon: <FaLightbulb className="text-2xl text-primary" />,
    image: '/lighting-indoor.jpg',
    features: ['Mood lighting', 'Architectural highlights'],
  },
  {
    id: 2,
    title: 'Outdoor Lighting',
    description: 'Create magical outdoor environments with our professional outdoor lighting setups.',
    icon: <FaLightbulb className="text-2xl text-primary" />, // Consider a different icon for outdoor if desired
    image: '/lighting-outdoor.jpg',
    features: ['Weather-proof', 'Large area coverage'],
  },
];

// Smoke Machine Services
const smokeServices = [
  {
    id: 1,
    title: 'Fog Machine Effects',
    description: 'Create an atmospheric environment with our professional fog machines, perfect for dance floors and dramatic entrances.',
    icon: <FaSmog className="text-2xl text-primary" />, // Or FaSprayCan
    image: '/smoke-fog.jpg',
    features: ['High-density fog', 'DMX control'],
  },
];

// Enhanced ServiceCard component
const ServiceCard = ({ 
  service,
  onClick,
  index
}: { 
  service: any; 
  onClick: () => void;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-darker to-dark border border-blue-900/20 shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 placeholder-bg flex items-center justify-center">
          <span className="text-primary text-lg font-medium">{service.title}</span>
        </div>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/80 to-transparent"></div>
        
        <motion.div
          className="absolute top-4 right-4 z-10 bg-primary/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {service.icon}
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
            <span className="ml-2 text-white text-sm">(5.0)</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-blue-100/70 mb-4 line-clamp-2">{service.description}</p>
        
        <ul className="mb-5 space-y-1">
          {service.features.slice(0, 2).map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-sm text-blue-200/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <button 
          className="w-full py-3 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
          onClick={onClick}
        >
          <span>View Details</span>
          <FaChevronRight className="text-sm" />
        </button>
      </div>
      
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
    </motion.div>
  );
};

// Service detail modal component
const ServiceDetailModal = ({ service, onClose }: { service: any; onClose: () => void }) => {
  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-darker/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative bg-dark w-full max-w-2xl rounded-xl overflow-hidden border border-blue-900/20 shadow-xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 bg-darker/80 p-2 rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
          onClick={onClose}
          title="Close"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="relative h-64">
          <div className="absolute inset-0 placeholder-bg-dark flex items-center justify-center">
            <span className="text-white text-lg font-medium">{service.title}</span>
          </div>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-primary rounded-full mr-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-blue-100/80 mb-6">{service.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-blue-200/80">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-blue-900/20 pt-5">
            <Link 
              href="/contact" 
              className="inline-block w-full py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-accent transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Section heading component with animations
const SectionHeading = ({ title, subtitle, highlightWord, align = "center" }: { 
  title: string, 
  subtitle: string,
  highlightWord?: string,
  align?: "left" | "center" | "right" 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const displayTitle = highlightWord 
    ? title.replace(highlightWord, `<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">${highlightWord}</span>`)
    : title;
  
  return (
    <motion.div 
      ref={ref}
      className={`mb-12 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h2 
        className="heading-lg mb-3 text-white"
        dangerouslySetInnerHTML={{ __html: displayTitle }}
      />
      <p className="text-blue-100/70 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

// Modal Component (if it exists, or a new one)
const ServiceModal = ({ service, onClose }: { service: any | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {service && (
        <ServiceDetailModal 
          service={service} 
          onClose={onClose} 
        />
      )}
    </AnimatePresence>
  );
};

// Main VendorPage component
export default function VendorPage() {
  const [activeModal, setActiveModal] = useState<any | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Scroll handling for top navigation
  useEffect(() => {
    // Prefetch important pages for faster navigation
    const prefetchLinks = ['/contact', '/about', '/'];
    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
    
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Scroll handling for hash links
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a slight delay to ensure smooth scrolling
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };
    
    // Handle initial hash if present
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Audio wave effect
  const AudioWave = () => (
    <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
      <div className="flex items-end justify-center h-full gap-1">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary/40"
            initial={{ height: 3 }}
            animate={{ 
              height: [3, Math.random() * 30 + 5, 3],
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.02
            }}
          />
        ))}
      </div>
    </div>
  );
  
  // Intersection observer for sections
  const [djRef, djInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [photoRef, photoInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [lightingRef, lightingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Section navigation
  const sections = [
    { id: "photos", label: "Photography", icon: <FaCamera /> },
    { id: "lighting", label: "Lighting", icon: <FaLightbulb /> },
    { id: "smoke", label: "Smoke Effects", icon: <FaSmog /> },
    { id: "decorations", label: "Decorations", icon: <IoSparkles /> },
  ];
  
  // Scroll to section function
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const allServices = [
    { 
      id: 'dj', 
      title: 'DJ Services', 
      icon: <FaMusic className="text-3xl text-primary" />, 
      description: "Our professional DJ services cater to various events with high-quality sound systems and experienced DJs who know how to keep your crowd energized.",
      services: djServices,
      quoteLink: "/contact?service=dj"
    },
    { 
      id: 'photos', 
      title: 'Photography Services', 
      icon: <FaCamera className="text-3xl text-primary" />, 
      description: "Capture your special moments with our professional photography services for various occasions, from weddings and birthdays to corporate events.",
      services: photoServices,
      quoteLink: "/contact?service=photography"
    },
    { 
      id: 'lighting', 
      title: 'Lighting Solutions', 
      icon: <FaLightbulb className="text-3xl text-primary" />, 
      description: "Transform your venue with our professional lighting solutions for indoor and outdoor events, creating the perfect atmosphere for your celebration.",
      services: lightingServices,
      quoteLink: "/contact?service=lighting"
    },
    { 
      id: 'smoke', 
      title: 'Smoke Effects', 
      icon: <FaSmog className="text-3xl text-primary" />, 
      description: "Create dramatic atmosphere and enhance your lighting with our professional smoke, fog, and haze machines for any event.",
      services: smokeServices,
      quoteLink: "/contact?service=smoke"
    },
    // ... other main service categories like Decorations if they exist
  ];

  return (
    <>
      {/* Hero Section - Redesigned */}
      <section ref={heroRef} className="min-h-[80vh] pt-28 pb-20 relative overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-darker/90 to-dark/90 z-10"></div>
          <Image 
            src="/vendor-bg.jpg" 
            alt="Vendor Services Background" 
            fill
            className="object-cover"
            priority
          />
          
          {/* Enhanced particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(150)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5 + 0.2
                }}
                animate={{
                  y: [0, Math.random() * -30 - 10],
                  x: [0, Math.random() * 10 - 5],
                }}
                transition={{
                  duration: 8 + Math.random() * 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced overlay effects */}
        <motion.div 
          className="absolute top-1/3 right-1/2 w-[25rem] h-[25rem] rounded-full bg-primary/5 filter blur-[100px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] rounded-full bg-blue-600/5 filter blur-[120px]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <FaMusic className="text-primary text-3xl" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Professional <span className="glow-text">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Eagle Sounds provides premium event services including professional DJ setups, 
              photoshoots, lighting solutions, and decorations for all types of events.
              Let us create an unforgettable experience for your special occasion.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link 
                href="/contact" 
                className="btn-primary px-8 py-4 text-lg min-w-[180px]"
              >
                Request a Quote
              </Link>
              
              <motion.button 
                onClick={() => scrollToSection('services-nav')} 
                className="btn-secondary !bg-transparent !border !border-white/30 px-8 py-4 text-lg min-w-[180px]"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                Explore Services <FaChevronDown className="inline ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced audio wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          <div className="flex items-end justify-center h-full gap-[2px]">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-t-full bg-gradient-to-b from-primary/80 to-primary/30"
                initial={{ height: 3 }}
                animate={{ 
                  height: [3, Math.random() * 40 + 5, 3],
                }}
                transition={{
                  duration: 1.2 + Math.random() * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.01
                }}
              />
            ))}
          </div>
        </div>
        {/* Removed scroll indicator */}
      </section>
      
      {/* Service Navigation */}
      <section id="services-nav" className="sticky top-16 z-30 py-4 bg-darker/80 backdrop-blur-lg border-y border-blue-900/20 shadow-lg">
        <div className="container-custom">
          <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
            {sections.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-blue-100/80 hover:text-primary flex items-center gap-2 rounded-full border border-blue-900/30 hover:border-primary/50 transition-all duration-300"
                >
                  <span className="hidden sm:inline">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* DJ Services Section */}
      <section id="dj" ref={djRef} className="section-padding bg-gradient-to-b from-darker to-dark">
        <div className="container-custom">
          <SectionHeading 
            title="DJ Services" 
            subtitle="Our professional DJ services cater to various events with high-quality sound systems and experienced DJs who know how to keep your crowd energized."
            highlightWord="DJ"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {djServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                onClick={() => setActiveModal(service)}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={djInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact?service=dj" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get DJ Service Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Photo Services Section */}
      <section id="photos" ref={photoRef} className="section-padding bg-gradient-to-b from-dark to-darker">
        <div className="container-custom">
          <SectionHeading 
            title="Photography Services" 
            subtitle="Capture your special moments with our professional photography services for various occasions, from weddings and birthdays to corporate events."
            highlightWord="Photography"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                index={index}
                onClick={() => setActiveModal(service)}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={photoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact?service=photography" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Photography Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Lighting Services Section */}
      <section id="lighting" ref={lightingRef} className="section-padding bg-gradient-to-b from-darker to-dark">
        <div className="container-custom">
          <SectionHeading 
            title="Lighting Solutions" 
            subtitle="Transform your venue with our professional lighting solutions for indoor and outdoor events, creating the perfect atmosphere for your celebration."
            highlightWord="Lighting"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightingServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                index={index}
                onClick={() => setActiveModal(service)}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={lightingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact?service=lighting" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Lighting Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Smoke Effects Section */}
      <section id="smoke" className="section-padding bg-gradient-to-b from-dark to-darker">
        <div className="container-custom">
          <SectionHeading 
            title="Smoke Effects" 
            subtitle="Create dramatic atmosphere and enhance your lighting with our professional smoke, fog, and haze machines for any event."
            highlightWord="Smoke"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smokeServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                index={index}
                onClick={() => setActiveModal(service)}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact?service=smoke" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Smoke Effects Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary opacity-30"></div>
        </div>
        
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg mb-3 text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span>
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto mb-12">
            Here's what some of our happy clients have to say about our services
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div 
              key={1}
              className="bg-darker/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 max-w-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 191, 255, 0.3)" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Priya Sharma" 
                    width={56} 
                    height={56} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Priya Sharma</h4>
                  <p className="text-blue-400 text-sm">
                    Wedding Event
                  </p>
                </div>
              </div>
              
              <p className="italic text-blue-100/80 mb-4">
                "Eagle Sounds transformed our wedding reception into an unforgettable celebration! The DJ read the crowd perfectly, playing a wonderful mix of Bollywood and Western music that kept everyone dancing. The lighting setup was spectacular and created the perfect ambiance. Highly recommended!"
              </p>
              
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <div className="absolute -top-4 -left-2 text-primary/20 text-6xl font-serif">
                "
              </div>
            </motion.div>
            
            <motion.div 
              key={2}
              className="bg-darker/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 max-w-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 191, 255, 0.3)" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial2.jpg" 
                    alt="Aryan Patel" 
                    width={56} 
                    height={56} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Aryan Patel</h4>
                  <p className="text-blue-400 text-sm">
                    Birthday Party
                  </p>
                </div>
              </div>
              
              <p className="italic text-blue-100/80 mb-4">
                "We hired Eagle Sounds for my son's 18th birthday party. The photography service was outstanding! They captured every special moment beautifully, and the quality of images exceeded our expectations. The photographers were professional and made everyone feel comfortable. We'll cherish these memories forever!"
              </p>
              
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <div className="absolute -top-4 -left-2 text-primary/20 text-6xl font-serif">
                "
              </div>
            </motion.div>
            
            <motion.div 
              key={3}
              className="bg-darker/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 max-w-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 191, 255, 0.3)" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial3.jpg" 
                    alt="Kavita Reddy" 
                    width={56} 
                    height={56} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Kavita Reddy</h4>
                  <p className="text-blue-400 text-sm">
                    Corporate Event
                  </p>
                </div>
              </div>
              
              <p className="italic text-blue-100/80 mb-4">
                "We engaged Eagle Sounds for our company's annual gala. The lighting design was extraordinary - it completely transformed our venue and created a professional yet festive atmosphere. The smoke effects added drama to our award ceremony, and their team was incredibly responsive and detail-oriented throughout the planning process."
              </p>
              
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <div className="absolute -top-4 -left-2 text-primary/20 text-6xl font-serif">
                "
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10">
            <Link 
              href="/about#testimonials" 
              className="btn-secondary !bg-transparent !border !border-white/30"
            >
              View All Testimonials
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
        
        {/* Audio wave overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          <div className="flex items-end justify-center h-full gap-1">
            {[...Array(80)].map((_, i) => (
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
                  delay: i * 0.02
                }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-darker">
        <div className="container-custom">
          <div className="bg-dark rounded-2xl overflow-hidden border border-blue-900/30 shadow-lg relative">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/5 filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="heading-lg mb-6 text-white">Ready to <span className="emphasis-text">Book Our Services</span>?</h2>
                <p className="text-blue-100/80 max-w-2xl mx-auto mb-8">
                  Contact us today to discuss your event requirements and get a personalized quote. Let's create an unforgettable experience together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href="/contact" className="btn-primary">
                    Get in Touch
                  </Link>
                  <Link href="/about" className="btn-secondary">
                    Learn More About Us
                  </Link>
                </div>
                
                <div className="mt-6">
                  <p className="text-white font-medium mb-3">Follow us on social media</p>
                  <div className="flex justify-center space-x-5">
                    <a href="https://www.instagram.com/eagle__sounds/" target="_blank" rel="noopener noreferrer" 
                      className="text-pink-400 hover:text-pink-300 transition-colors">
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.youtube.com/@eagledjsounds" target="_blank" rel="noopener noreferrer" 
                      className="text-red-500 hover:text-red-400 transition-colors">
                      <FaYoutube className="text-2xl" />
                    </a>
                    <a href="https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x" target="_blank" rel="noopener noreferrer" 
                      className="text-green-500 hover:text-green-400 transition-colors">
                      <FaWhatsapp className="text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/eagle.sounds.2025/" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-500 hover:text-blue-400 transition-colors">
                      <FaFacebook className="text-2xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Detail Modal */}
      <ServiceModal 
        service={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}