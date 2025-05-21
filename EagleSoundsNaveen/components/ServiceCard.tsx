'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="service-card group relative">
      <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 shadow-neon-blue/20">
        {icon}
      </div>
      
      <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-blue-100/70 mb-4">
        {description}
      </p>
      
      <Link 
        href={link}
        className="inline-flex items-center font-medium text-primary hover:text-accent transition-colors"
      >
        Learn More
        <motion.span 
          className="ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowRight size={14} />
        </motion.span>
      </Link>
      
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
    </div>
  );
} 