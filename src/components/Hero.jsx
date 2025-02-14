import { motion } from "framer-motion";
import React from 'react';

const Hero = () => {
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-white/10 to-white/5 pattern-circuit-board" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-2xl px-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.2
          }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Bellamkonda Rohith</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mb-8 md:mb-12 mx-auto drop-shadow-md px-4 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.5
          }}
        >
          A passionate Frontend Developer focused on crafting exceptional digital experiences with modern web technologies.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.8
          }}
        >
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-sm md:text-base"
            whileHover={{ 
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.95 }}
            variants={floatingVariants}
            animate="float"
          >
            📬 Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;