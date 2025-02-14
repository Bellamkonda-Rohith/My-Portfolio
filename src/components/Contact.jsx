import { motion } from 'framer-motion';
import React from 'react';
import { Email, Phone, LocationOn, LinkedIn, GitHub, Code } from '@mui/icons-material';

const contactItems = [
  { 
    Icon: Email, 
    bg: 'bg-blue-100', 
    color: 'text-blue-600', 
    label: 'Email', 
    value: 'rohithbellamkonda0@gmail.com',
    
  },
  { 
    Icon: Phone, 
    bg: 'bg-purple-100', 
    color: 'text-purple-600', 
    label: 'Phone', 
    value: '+91 6305292852',
     
  },
  { 
    Icon: LocationOn, 
    bg: 'bg-pink-100', 
    color: 'text-pink-600', 
    label: 'Location', 
    value: 'vijayawada, India' 
  }
];

const socialLinks = [
  { 
    Icon: LinkedIn, 
    color: 'text-blue-600', 
    link: "https://www.linkedin.com/in/rohith-bellamkonda-133b87280/",
    name: "LinkedIn" 
  },
  { 
    Icon: GitHub, 
    color: 'text-gray-600', 
    link: "https://github.com/Bellamkonda-Rohith?tab=repositories",
    name: "GitHub" 
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

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-xl"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in touch for collaborations or just a friendly hello 👋
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Cards */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-8"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/50 hover:border-blue-100"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <motion.span
                    className={`p-3 md:p-4 ${item.bg} rounded-xl`}
                    whileHover={{ rotate: 15 }}
                  >
                    <item.Icon className={`${item.color} text-3xl`} />
                  </motion.span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.label}</h3>
                    <p className="text-gray-600 text-base md:text-lg">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
            className="p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/50 hover:border-blue-100"
          >
            <div className="text-center">
              <motion.div
                className="p-4 bg-blue-100 w-fit mx-auto rounded-2xl mb-6"
                variants={floatVariants}
                animate="float"
              >
                <Code className="text-blue-600 text-3xl" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Find Me Online</h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 md:p-5 bg-gray-100 rounded-xl hover:bg-gray-50 ${social.color} relative group`}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon className="text-3xl" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}