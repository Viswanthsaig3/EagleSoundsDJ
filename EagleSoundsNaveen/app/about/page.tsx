'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaUsers, FaCalendarCheck, FaCheckCircle, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// Stats data
const stats = [
  {
    id: 1,
    value: '5+',
    label: 'Years Experience',
    icon: <FaCalendarCheck className="text-3xl text-primary" />,
  },
  {
    id: 2,
    value: '250+',
    label: 'Events Completed',
    icon: <FaCheckCircle className="text-3xl text-primary" />,
  },
  {
    id: 3,
    value: '100+',
    label: 'Happy Clients',
    icon: <FaUsers className="text-3xl text-primary" />,
  },
  {
    id: 4,
    value: '20+',
    label: 'Awards & Recognition',
    icon: <FaAward className="text-3xl text-primary" />,
  },
];

// Gallery data
const galleryImages = [
  { id: 1, src: '/gallery1.jpg', alt: 'DJ event with colorful lighting', category: 'DJ' },
  { id: 2, src: '/gallery2.jpg', alt: 'Wedding ceremony with elegant decorations', category: 'Wedding' },
  { id: 3, src: '/gallery3.jpg', alt: 'College event with large crowd', category: 'College' },
  { id: 4, src: '/gallery4.jpg', alt: 'Birthday party with colorful decorations', category: 'Birthday' },
  { id: 5, src: '/gallery5.jpg', alt: 'Corporate event with professional setup', category: 'Corporate' },
  { id: 6, src: '/gallery6.jpg', alt: 'Festival celebration with vibrant lighting', category: 'Festival' },
  { id: 7, src: '/gallery7.jpg', alt: 'Photo shoot session', category: 'Photo' },
  { id: 8, src: '/gallery8.jpg', alt: 'Lighting setup for outdoor event', category: 'Lighting' },
  { id: 9, src: '/gallery9.jpg', alt: 'Roadshow with sound system', category: 'Roadshow' },
];

// Team data
const teamMembers = [
  {
    id: 1,
    name: 'Tholusuri Naveen',
    position: 'Founder & CEO',
    bio: 'With over 10 years of experience in the events industry, Naveen founded Eagle Sounds with a vision to provide premium DJ and event services in the region.',
    image: '/team1.jpg',
  },
];

export default function AboutPage() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Animation controls
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 hero-gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/about-hero.jpg" 
            alt="About Eagle Sounds" 
            fill
            className="object-cover"
            priority={true} // Added priority
            sizes="100vw" // Added sizes
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
              About <span className="glow-text">Eagle Sounds</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-white/90 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bringing life to your events with premium sound, lighting, and entertainment services.
            </motion.p>
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="#gallery" className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-md font-medium inline-block transition-all duration-300 hover:bg-primary hover:text-dark">
                View Gallery
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section ref={storyRef} className="section-padding section-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg mb-6 text-white">Our <span className="emphasis-text">Story</span></h2>
              <p className="text-blue-100/70 mb-4">
                Eagle Sounds was founded with a passion for creating memorable experiences through music and entertainment. 
                Starting as a small local DJ service, we've grown into a comprehensive event services provider catering 
                to various events across the region.
              </p>
              <p className="text-blue-100/70 mb-4">
                Our journey began when founder Tholusuri Naveen recognized the need for professional DJ and sound 
                services for local events. With dedication to quality and customer satisfaction, we've expanded our 
                services to include lighting, decorations, photo shoots, and more.
              </p>
              <p className="text-blue-100/70 mb-6">
                Today, Eagle Sounds is known for its reliability, professionalism, and ability to transform ordinary 
                events into extraordinary experiences. We take pride in our state-of-the-art equipment, experienced 
                team, and commitment to excellence in every project we undertake.
              </p>
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/50 shadow-neon-blue">
                  <Image 
                    src="/founder.jpg" 
                    alt="Tholusuri Naveen" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-white">Tholusuri Naveen</h4>
                  <p className="text-primary">Founder & CEO</p>
                  <div className="flex mt-2 space-x-2">
                    <a 
                      href="https://www.instagram.com/naveen_tholuchuri_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-primary transition-colors"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-neon-blue/20"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 placeholder-bg flex items-center justify-center">
                <span className="text-primary text-lg font-medium">About Image</span>
              </div>
              <Image 
                src="/about-image.jpg" 
                alt="About Eagle Sounds" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" // Added sizes
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section ref={statsRef} className="section-padding section-gradient py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 text-white">Our <span className="emphasis-text">Achievements</span></h2>
            <p className="text-blue-100/70 mx-auto max-w-2xl">
              Over the years, we've had the privilege of serving numerous clients and being part of countless memorable events.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                variants={itemVariants}
                className="dark-card flex flex-col items-center text-center"
              >
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 shadow-neon-blue/20">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-display font-bold mb-2 text-primary">{stat.value}</h3>
                <p className="text-blue-100/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="section-padding section-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 text-white">Our <span className="emphasis-text">Gallery</span></h2>
            <p className="text-blue-100/70 mx-auto max-w-2xl mb-8">
              Check out our featured event videos below.
            </p>
          </div>
          
          {/* Embedded YouTube Videos - Made Larger */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/1u5iDF1Wk1A"
                title="Eagle Sounds Event Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px]"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg mt-6 sm:mt-12">
              <iframe
                src="https://www.youtube.com/embed/IKG2zx9uWcU"
                title="Eagle Sounds Event Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section ref={teamRef} className="section-padding section-gradient">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 text-white">Meet Our <span className="emphasis-text">Team</span></h2>
            <p className="text-blue-100/70 mx-auto max-w-2xl">
              The passionate professionals behind Eagle Sounds dedicated to making your events extraordinary.
            </p>
          </div>
          
          <motion.div 
            className="flex justify-center" // Changed from grid to flex for centering single item
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id} 
                variants={itemVariants}
                className="dark-card group md:max-w-md" // Added max-width for the card
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 placeholder-bg-dark flex items-center justify-center">
                    <span className="text-primary font-medium">{member.name}</span>
                  </div>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw" // Added sizes
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent"></div>
                </div>
                <h3 className="heading-sm mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-blue-100/70">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="section-padding bg-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 text-white">Follow Us on <span className="emphasis-text">Social Media</span></h2>
            <p className="text-blue-100/70 mx-auto max-w-2xl">
              Stay updated with our latest events, behind-the-scenes footage, and special offers.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <motion.a 
              href="https://www.instagram.com/eagle__sounds/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-300 mb-3">
                <FaInstagram className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-medium">Eagle Sounds</p>
              <span className="text-sm text-blue-300">@eagle__sounds</span>
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/naveen_tholuchuri_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-300 mb-3">
                <FaInstagram className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-medium">Naveen Tholuchuri</p>
              <span className="text-sm text-blue-300">@naveen_tholuchuri_</span>
            </motion.a>
            
            <motion.a 
              href="https://www.youtube.com/@eagledjsounds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 mb-3">
                <FaYoutube className="text-3xl text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-medium">YouTube</p>
              <span className="text-sm text-blue-300">@eagledjsounds</span>
            </motion.a>
            
            <motion.a 
              href="https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300 mb-3">
                <FaWhatsapp className="text-3xl text-green-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-medium">WhatsApp Channel</p>
              <span className="text-sm text-blue-300">Eagle Sounds</span>
            </motion.a>
            
            <motion.a 
              href="https://www.facebook.com/eagle.sounds.2025/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 mb-3">
                <FaFacebook className="text-3xl text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-medium">Facebook</p>
              <span className="text-sm text-blue-300">Eagle Sounds</span>
            </motion.a>
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
          <h2 className="heading-lg mb-6 text-white">Ready to <span className="emphasis-text">Collaborate</span>?</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto mb-8">
            Get in touch with us at <a href="mailto:Naveencandc4689@gmail.com" className="text-primary hover:underline">Naveencandc4689@gmail.com</a> to discuss your requirements and how we can make your event special.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}