import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    // Ensure the menu closes immediately
    setIsOpen(false);

    // Use setTimeout to allow the menu to collapse before scrolling
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Element with ID ${id} not found`);
      }
    }, 100); // Delay to ensure menu animation completes
  };

  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const menuVariants = {
    open: { 
      opacity: 1, 
      height: 'auto', 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    closed: { 
      opacity: 0, 
      height: 0, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -15, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#1A1A2E]/95 backdrop-blur-lg shadow-lg' 
          : 'bg-[#1A1A2E]/80 backdrop-blur-md'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#E6E6FA]">
              Bellamkonda Rohith
            </span>
            <motion.span
              className="ml-2 w-2 h-2 bg-[#FF6F61] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.path);
                }}
                className="relative text-sm lg:text-base font-medium text-[#E6E6FA] hover:text-[#FF6F61] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6F61] rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full text-[#E6E6FA] bg-[#FF6F61]/20 hover:bg-[#FF6F61]/40 focus:outline-none focus:ring-2 focus:ring-[#FF6F61] focus:ring-offset-2 focus:ring-offset-[#1A1A2E]"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-[#1A1A2E]/98 backdrop-blur-lg border-t border-[#4A4E69]/50"
            >
              <div className="px-4 py-6 space-y-4">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.path);
                    }}
                    className="block px-4 py-3 text-[#E6E6FA] hover:bg-[#4A4E69]/20 rounded-lg text-base font-medium transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}