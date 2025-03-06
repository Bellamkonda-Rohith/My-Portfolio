import { motion } from 'framer-motion';
import { SparklesIcon, AcademicCapIcon, CodeBracketSquareIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import React from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 15, delay: i * 0.2 } })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  const items = [
    { title: "Education", icon: <AcademicCapIcon className="w-6 h-6 text-[#FF6F61]" />, content: "B.Sc in AI & Machine Learning" },
    { title: "Projects", icon: <CodeBracketSquareIcon className="w-6 h-6 text-[#FF6F61]" />, content: "5+ Innovative Web Creations" },
    { title: "Skills", icon: <CpuChipIcon className="w-6 h-6 text-[#FF6F61]" />, content: "React, JS, Tailwind, & More" },
    { title: "Passion", icon: <SparklesIcon className="w-6 h-6 text-[#FF6F61]" />, content: "Crafting Seamless Experiences" }
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E6E6FA] text-[#1A1A2E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div className="text-center lg:text-left">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6"
              variants={textVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-[#4A4E69]"
              variants={textVariants}
            >
              I’m a <span className="font-medium text-[#FF6F61]">Frontend Developer</span> with a background in AI and a love for creating{' '}
              <span className="font-medium text-[#FF6F61]">intuitive, beautiful web experiences</span>. My journey blends technical precision with creative flair.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-xl shadow-md border border-[#4A4E69]/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="p-2 bg-[#FF6F61]/10 rounded-full">{item.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A2E]">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-[#4A4E69]">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}