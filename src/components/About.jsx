import { motion } from 'framer-motion';
import { SparklesIcon, AcademicCapIcon, CodeBracketSquareIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import React from 'react';

const About = () => {
  const items = [
    { title: 'Education', icon: <AcademicCapIcon className="w-6 h-6 text-[#5E60CE]" />, content: 'B.Sc in AI & Machine Learning' },
    { title: 'Projects', icon: <CodeBracketSquareIcon className="w-6 h-6 text-[#5E60CE]" />, content: '5+ Innovative Web Creations' },
    { title: 'Skills', icon: <CpuChipIcon className="w-6 h-6 text-[#5E60CE]" />, content: 'React, JS, Tailwind, & More' },
    { title: 'Passion', icon: <SparklesIcon className="w-6 h-6 text-[#5E60CE]" />, content: 'Crafting Seamless Experiences' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2E7FE] text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.h2 className="text-4xl font-bold mb-6">About Me</motion.h2>
            <motion.p className="text-lg text-[#94A3B8] max-w-xl">
              I’m a <span className="text-[#5E60CE] font-medium">Frontend Developer</span> blending AI knowledge with a passion for{' '}
              <span className="text-[#5E60CE] font-medium">intuitive, elegant web solutions</span>.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1E293B] p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">{item.title}</h3>
                </div>
                <p className="text-[#94A3B8]">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;