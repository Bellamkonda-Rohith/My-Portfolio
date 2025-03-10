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
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const menuVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeOut' } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0F172A]/95 shadow-lg' : 'bg-[#0F172A]/80'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Bellamkonda Rohith
            </span>
            <motion.span
              className="ml-2 w-2 h-2 bg-[#5E60CE] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.path);
                }}
                className="text-[#F8FAFC] hover:text-[#F472B6] text-base font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 text-[#F8FAFC] hover:text-[#F472B6] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-[#1E293B] py-4"
            >
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.path);
                  }}
                  className="block px-4 py-2 text-[#F8FAFC] hover:bg-[#5E60CE]/20 text-base font-medium"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}