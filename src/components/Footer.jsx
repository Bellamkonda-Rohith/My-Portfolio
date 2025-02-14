import React from "react";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Rohith Bellamkonda</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            { Icon: LinkedIn, link: "https://www.linkedin.com/in/rohith-bellamkonda-133b87280/" },
            { Icon: GitHub, link: "https://github.com/Bellamkonda-Rohith" },
            { Icon: Mail, link: "mailto:rohithbellamkonda0@gmail.com" }
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
            >
              <Icon fontSize="large" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
