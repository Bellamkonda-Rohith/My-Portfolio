import { motion } from "framer-motion";
import React from 'react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98 }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#1A1A2E] text-[#E6E6FA] relative overflow-hidden"
      role="banner"
      aria-label="Hero Section"
    >
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#FF6F61_0%,transparent_70%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          variants={textVariants}
        >
          Hey, I’m{' '}
          <span className="relative inline-block">
            <span className="text-[#FF6F61]">Bellamkonda Rohith</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6F61] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed opacity-90"
          variants={textVariants}
        >
          A Frontend Developer passionate about crafting seamless, pixel-perfect digital experiences.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          variants={textVariants}
        >
          <motion.a
            href="#contact"
            className="relative px-8 py-4 bg-[#FF6F61] text-[#1A1A2E] font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E6E6FA] focus:ring-offset-2 focus:ring-offset-[#1A1A2E]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Contact Bellamkonda Rohith"
          >
            Get in Touch
            <motion.span
              className="absolute inset-0 bg-[#E6E6FA] opacity-0 hover:opacity-20 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="px-8 py-4 border border-[#E6E6FA] text-[#E6E6FA] font-semibold rounded-full hover:bg-[#E6E6FA]/10 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="View Projects"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;