import React from "react";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      Icon: LinkedIn,
      link: "https://www.linkedin.com/in/rohith-bellamkonda-133b87280/", // Replace with your LinkedIn URL
    },
    {
      Icon: GitHub,
      link: "https://github.com/Bellamkonda-Rohith", // Your GitHub URL
    },
    {
      Icon: Mail,
      link: "rohithbellamkonda0@gmail.com", // Replace with your email
    },
  ];

  const linkVariants = {
    hover: {
      scale: 1.2,
      color: "#F472B6",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ">
        {/* Branding */}
        <p className="text-lg font-semibold tracking-tight">
          © {new Date().getFullYear()} Bellamkonda Rohith
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#F472B6] transition-colors duration-300"
              variants={linkVariants}
              whileHover="hover"
              aria-label={`Visit my ${Icon === LinkedIn ? "LinkedIn" : Icon === GitHub ? "GitHub" : "Email"}`}
            >
              <Icon fontSize="large" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Optional Divider and Attribution */}
      <div className="mt-6 border-t border-[#1E293B] pt-4 text-center text-sm text-[#94A3B8]">
        <p>Designed & Built with <span className="text-[#5E60CE]">React</span> and <span className="text-[#F472B6]">Passion</span></p>
      </div>
    </footer>
  );
}