import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import React from 'react';
import SignBae from '../assets/Singbae.png';
import Student from "../assets/Studentlone.png";
import Pos from '../assets/Pocscanning.png';

const projects = [
  {
    title: "SingBae - Music Streaming",
    description: "Spotify-inspired music streaming platform with premium features",
    tech: ["React.js", "JavaScript", "Material UI"],
    link: "https://sing-bae.vercel.app/",
    github: "https://github.com/Bellamkonda-Rohith/SingBae/",
    image: SignBae
  },
  {
    title: "Student Loan Portal",
    description: "Education financing management system with analytics dashboard",
    tech: ["React.js", "JavaScript", "Material UI"],
    link: "https://student-loan-portal.vercel.app/",
    github: "https://github.com/Bellamkonda-Rohith/student-loan-portal/",
    image: Student
  },
  {
    title: "POS System",
    description: "Retail management solution with inventory tracking",
    tech: ["React.js", "JavaScript", "Material UI"],
    link: "https://pos-system-peach-beta.vercel.app/",
    github: "https://github.com/Bellamkonda-Rohith/Pos-System/",
    image: Pos
  }
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
      delay: i * 0.2
    }
  })
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-xl"
            initial={{ x: Math.random() * 120 - 10 + '%', y: Math.random() * 120 - 10 + '%', scale: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 0.1, 0] }}
            transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of my technical capabilities and problem-solving skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-white/50 hover:border-blue-100">
                {/* Project Preview */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative  bg-gray-100 overflow-hidden img1"
                >
                          <motion.img
                              
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </motion.div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all justify-center text-sm md:text-base"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all justify-center text-sm md:text-base"
                    >
                      <CodeBracketIcon className="w-4 h-4 md:w-5 md:h-5" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}