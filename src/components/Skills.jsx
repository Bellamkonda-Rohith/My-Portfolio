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
  { name: 'HTML5', icon: <HtmlIcon fontSize="inherit" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <CssIcon fontSize="inherit" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <JavascriptIcon fontSize="inherit" />, color: 'text-yellow-500' },
  { name: 'React', icon: <ReactIcon fontSize="inherit" />, color: 'text-cyan-500' },
  { name: 'Bootstrap', icon: <BootstrapIcon fontSize="inherit" />, color: 'text-purple-500' },
  { name: 'Tailwind CSS', icon: <TailwindIcon fontSize="inherit" />, color: 'text-cyan-600' },
  { name: 'Material UI', icon: <MaterialUiIcon fontSize="inherit" />, color: 'text-blue-600' },
  { name: 'Redux Toolkit', icon: <ReduxIcon fontSize="inherit" />, color: 'text-purple-600' }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1
    }
  })
};

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl opacity-20"
            initial={{
              x: Math.random() * 120 - 10 + '%',
              y: Math.random() * 120 - 10 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Core technologies powering my development process
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all h-full flex flex-col items-center justify-center gap-4 border border-white/50 hover:border-blue-100">
                <motion.div
                  variants={floatVariants}
                  animate="float"
                  className={`text-5xl md:text-6xl ${skill.color} transition-colors`}
                >
                  {skill.icon}
                </motion.div>
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-gray-900 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating animation for entire section */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}