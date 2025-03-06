import { motion } from 'framer-motion';
import React from 'react';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';

const contactItems = [
  { 
    Icon: Email, 
    color: '#FF6F61', 
    label: 'Email', 
    value: 'rohithbellamkonda0@gmail.com',
    link: 'mailto:rohithbellamkonda0@gmail.com' // Updated to match the actual email
  },
  { 
    Icon: Phone, 
    color: '#FF6F61', 
    label: 'Phone', 
    value: '+91 6305292852', 
    link: 'tel:+916305292852' // Updated to match the actual phone number
  },
  { 
    Icon: LocationOn, 
    color: '#FF6F61', 
    label: 'Location', 
    value: 'Vijayawada, Andhra Pradesh' // Fixed typo in "AndhraPradesh"
  }
];

const socialLinks = [
  { 
    Icon: LinkedIn, 
    color: '#FF6F61', 
    link: 'https://www.linkedin.com/in/rohith-bellamkonda-133b87280/', 
    name: 'LinkedIn' 
  },
  { 
    Icon: GitHub, 
    color: '#FF6F61', 
    link: 'https://github.com/Bellamkonda-Rohith', 
    name: 'GitHub' 
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

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Contact() {
  return (
    <section 
      id="contact" 
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
            Let’s Connect
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light text-[#4A4E69] max-w-2xl mx-auto"
            variants={textVariants}
          >
            Reach out for collaborations, opportunities, or a friendly chat.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-xl shadow-md border border-[#4A4E69]/20 flex items-center gap-4 group"
              >
                <motion.span
                  className="p-3 bg-[#FF6F61]/10 rounded-full"
                  variants={floatVariants}
                  animate="float"
                >
                  <item.Icon className="text-[#FF6F61] text-2xl sm:text-3xl" />
                </motion.span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A2E]">{item.label}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm sm:text-base text-[#4A4E69] hover:text-[#FF6F61] transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-[#4A4E69]">{item.value}</p>
                  )}
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#FF6F61]/10 opacity-0 group-hover:opacity-100 rounded-xl"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-[#4A4E69]/20 flex flex-col items-center"
          >
            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-[#1A1A2E] mb-6"
              variants={textVariants}
            >
              Find Me Online
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-[#FF6F61]/10 rounded-full text-[#FF6F61] relative group"
                >
                  <social.Icon className="text-3xl sm:text-4xl" />
                  <motion.span
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#1A1A2E] text-[#E6E6FA] text-xs sm:text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}