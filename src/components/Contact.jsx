import { motion } from 'framer-motion';
import React from 'react';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';

const contactItems = [
  { Icon: Email, label: 'Email', value: 'rohithbellamkonda0@gmail.com', link: 'mailto:rohithbellamkonda0@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '+91 6305292852', link: 'tel:+916305292852' },
  { Icon: LocationOn, label: 'Location', value: 'Andhra Pradesh, India' },
];

const socialLinks = [
  { Icon: LinkedIn, link: 'https://www.linkedin.com/in/rohith-bellamkonda-133b87280/', name: 'LinkedIn' },
  { Icon: GitHub, link: 'https://github.com/Bellamkonda-Rohith', name: 'GitHub' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2E7FE] text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Reach out for collaborations or opportunities.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1E293B] p-6 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:bg-[#1E293B]/90"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <item.Icon className="text-[#5E60CE] text-3xl flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">{item.label}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#94A3B8] hover:text-[#F472B6] transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#94A3B8]">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="bg-[#1E293B] p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#F8FAFC] mb-6">Find Me Online</h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5E60CE] hover:text-[#F472B6] transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  aria-label={`Visit my ${social.name}`}
                >
                  <social.Icon className="text-4xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;