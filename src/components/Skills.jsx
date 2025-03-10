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
  Storage as ReduxIcon,
} from '@mui/icons-material';

const skills = [
  { name: 'HTML5', icon: HtmlIcon, color: '#5E60CE' },
  { name: 'CSS3', icon: CssIcon, color: '#5E60CE' },
  { name: 'JavaScript', icon: JavascriptIcon, color: '#5E60CE' },
  { name: 'React', icon: ReactIcon, color: '#5E60CE' },
  { name: 'Bootstrap', icon: BootstrapIcon, color: '#5E60CE' },
  { name: 'Tailwind CSS', icon: TailwindIcon, color: '#5E60CE' },
  { name: 'Material UI', icon: MaterialUiIcon, color: '#5E60CE' },
  { name: 'Redux Toolkit', icon: ReduxIcon, color: '#5E60CE' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2E7FE] text-[#0F172A]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4">Technical Skills</motion.h2>
        <motion.p className="text-lg text-[#94A3B8] mb-12">
          Tools I use to craft exceptional web experiences.
        </motion.p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bg-[#1E293B] p-6 rounded-lg shadow-md flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <skill.icon
                className="text-4xl mb-2"
                style={{ color: skill.color }}
                fontSize="large" // Adjust size via Material-UI prop
              />
              <h3 className="text-[#F8FAFC] font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;