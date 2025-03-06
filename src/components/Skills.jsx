import { motion } from 'framer-motion';
import React from 'react';
import {
  Code as HtmlIcon,
  Palette as CssIcon,
  Javascript as JavascriptIcon,
  RocketLaunch as ReactIcon,
  Style as TailwindIcon,
  Extension as BootstrapIcon,
  Widgets as MaterialUiIcon,
  Storage as ReduxIcon
} from '@mui/icons-material';

const skills = [
  { name: 'HTML5', icon: <HtmlIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'CSS3', icon: <CssIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'JavaScript', icon: <JavascriptIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'React', icon: <ReactIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'Bootstrap', icon: <BootstrapIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'Tailwind CSS', icon: <TailwindIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'Material UI', icon: <MaterialUiIcon fontSize="inherit" />, color: '#FF6F61' },
  { name: 'Redux Toolkit', icon: <ReduxIcon fontSize="inherit" />, color: '#FF6F61' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 15, delay: i * 0.15 }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E6E6FA] text-[#1A1A2E] overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#FF6F61_0%,transparent_70%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A2E] mb-4"
            variants={textVariants}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light text-[#4A4E69] max-w-2xl mx-auto"
            variants={textVariants}
          >
            Tools and technologies I wield to build exceptional web experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-xl shadow-md border border-[#4A4E69]/20 flex flex-col items-center justify-center group"
            >
              <motion.div
                variants={floatVariants}
                animate="float"
                className="text-4xl sm:text-5xl text-[#FF6F61] mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1A2E] text-center">
                {skill.name}
              </h3>
              <motion.div
                className="absolute inset-0 bg-[#FF6F61]/10 opacity-0 group-hover:opacity-100 rounded-xl"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}