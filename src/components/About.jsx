import { motion } from 'framer-motion';
import { SparklesIcon, AcademicCapIcon, CodeBracketSquareIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import React from 'react';

const bubbleVariants = {
  initial: { scale: 0 },
  animate: (i) => ({
    scale: [0, 1, 0],
    opacity: [0, 0.2, 0],
    transition: {
      delay: i * 0.5,
      duration: Math.random() * 8 + 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  })
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.15
    }
  })
};

export default function About() {
  const items = [
    { 
      title: "Education", 
      icon: <AcademicCapIcon className="w-6 h-6 text-purple-600" />,
      content: "B.Sc in Artificial Intelligence & Machine Learning"
    },
    { 
      title: "Projects",
      icon: <CodeBracketSquareIcon className="w-6 h-6 text-indigo-600" />,
      content: "5+ Innovative Web Projects Completed"
    },
    { 
      title: "Skills",
      icon: <CpuChipIcon className="w-6 h-6 text-pink-600" />,
      content: "React, JavaScript, Tailwind..."
    },
    { 
      title: "Passion",
      icon: <SparklesIcon className="w-6 h-6 text-blue-600" />,
      content: "Creating beautiful interactive experiences"
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background bubbles */}
      <motion.div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24"
        >
          {/* Text Content - Mobile first stack */}
          <motion.div 
            className="flex-1 w-full text-center md:text-left"
            variants={{
              offscreen: { x: -50, opacity: 0 },
              onscreen: { 
                x: 0, 
                opacity: 1,
                transition: { type: 'spring', stiffness: 100 }
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-6 md:mb-8"
            >
              <motion.div
                initial={{ rotate: -45, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl w-fit mx-auto md:mx-0"
              >
                <CodeBracketSquareIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Fresh <span className="font-semibold text-blue-600">AI graduate</span> turned passionate{' '}
              <span className="font-semibold text-indigo-600">frontend developer</span> creating{' '}
              <span className="font-semibold text-pink-600">visually stunning</span> and{' '}
              <span className="font-semibold text-purple-600">highly functional</span> web experiences
            </motion.p>
          </motion.div>

          {/* Stats Grid - Mobile first 1 column */}
          <motion.div 
            className="flex-1 w-full"
            variants={{
              offscreen: { x: 50, opacity: 0 },
              onscreen: { 
                x: 0, 
                opacity: 1,
                transition: { type: 'spring', stiffness: 100 }
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/90 backdrop-blur-lg p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md border border-white/50 transition-all"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <motion.span 
                      className="p-2 md:p-3 rounded-xl bg-blue-50"
                      whileHover={{ rotate: 15 }}
                    >
                      {item.icon}
                    </motion.span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 pl-1">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}