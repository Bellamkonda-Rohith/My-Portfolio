import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-[#F8FAFC] relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#5E60CE]/20 to-[#F472B6]/20 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          variants={textVariants}
        >
          Hey, I’m <span className="text-[#5E60CE]">Bellamkonda Rohith</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-[#94A3B8]"
          variants={textVariants}
        >
          A Frontend Developer crafting seamless, pixel-perfect experiences.
        </motion.p>
        <motion.div className="flex justify-center gap-6" variants={textVariants}>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-[#5E60CE] text-[#F8FAFC] font-semibold rounded-lg hover:bg-[#F472B6] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 border border-[#5E60CE] text-[#5E60CE] hover:bg-[#5E60CE]/10 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;