import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import React from 'react';
import SignBae from '../assets/Singbae.png';
import Student from '../assets/Studentlone.png';
import Pos from '../assets/Pocscanning.png';

const projects = [
  {
    title: 'SingBae - Music Streaming',
    description: 'Spotify-inspired music streaming platform with premium features',
    tech: ['React.js', 'JavaScript', 'Material UI'],
    link: 'https://sing-bae.vercel.app/',
    github: 'https://github.com/Bellamkonda-Rohith/SingBae/',
    image: SignBae,
  },
  {
    title: 'Student Loan Portal',
    description: 'Education financing management system with analytics dashboard',
    tech: ['React.js', 'JavaScript', 'Material UI'],
    link: 'https://student-loan-portal.vercel.app/',
    github: 'https://github.com/Bellamkonda-Rohith/student-loan-portal/',
    image: Student,
  },
  {
    title: 'POS System',
    description: 'Retail management solution with inventory tracking',
    tech: ['React.js', 'JavaScript', 'Material UI'],
    link: 'https://pos-system-peach-beta.vercel.app/',
    github: 'https://github.com/Bellamkonda-Rohith/Pos-System/',
    image: Pos,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2E7FE] text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h2 className="text-4xl font-bold mb-4">Featured Projects</motion.h2>
          <motion.p className="text-lg text-[#94A3B8]">
            Showcasing my technical skills and creative solutions.
          </motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-[#1E293B] rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2">{project.title}</h3>
                <p className="text-[#94A3B8] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#5E60CE]/20 text-[#5E60CE] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#5E60CE] text-[#F8FAFC] rounded-lg hover:bg-[#F472B6]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#5E60CE] text-[#5E60CE] rounded-lg hover:bg-[#5E60CE]/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CodeBracketIcon className="w-5 h-5" /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;