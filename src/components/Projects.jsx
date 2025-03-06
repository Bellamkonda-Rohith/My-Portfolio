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
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 15, delay: i * 0.2 }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  return (
    <section 
      id="projects" 
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
        {/* Section Header */}
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light text-[#4A4E69] max-w-2xl mx-auto"
            variants={textVariants}
          >
            A showcase of my technical prowess and creative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md border border-[#4A4E69]/20 overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <motion.div
                className="relative h-48 sm:h-56 bg-[#1A1A2E] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A2E] mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-[#4A4E69] mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#FF6F61]/10 text-[#FF6F61] rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6F61] text-[#E6E6FA] font-semibold rounded-full shadow-md hover:bg-[#FF6F61]/90 transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#4A4E69] text-[#4A4E69] font-semibold rounded-full hover:bg-[#4A4E69]/10 transition-colors duration-300"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}