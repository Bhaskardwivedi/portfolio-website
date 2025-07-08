import React, { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";
import footerBg from "../assets/footer.jpg";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.31.164:8000/api/socials/")
      .then((response) => setSocialLinks(response.data))
      .catch((error) => console.error("Error fetching socials:", error));
  }, []);

  const getIconComponent = (iconName) => {
    return FaIcons[iconName] || Fa6Icons[iconName] || SiIcons[iconName] || FaIcons["FaEnvelope"];
  };

  return (
    <footer
      className="relative text-white font-poppins bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBg})`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-left"
        >
          <h2 className="text-2xl font-bold">
            <span className="text-orange-500">Bhaskar</span>
            <span className="text-white">.AI</span>
          </h2>
          <p className="text-sm text-gray-300">
            Transforming ideas into scalable tech.<br />
            Let's connect and build together.
          </p>
          <div className="mt-4">
            <p className="text-sm mb-2 text-orange-300">Subscribe to my newsletter</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-white/10 border border-gray-500 text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Middle Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {["Home", "About", "Services", "Skills", "Projects", "Blog", "Contact", "Chat"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-orange-300 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-3">Connect With Me</h3>
          <div className="flex justify-center flex-wrap gap-4 text-lg">
            {socialLinks.map((item, idx) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  key={idx}
                  href={item.url}
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 p-2 rounded-full shadow-lg shadow-orange-400/40"
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="relative z-10 text-center text-sm text-gray-300 py-4 border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Bhaskar.AI</span> | All Rights Reserved
      </motion.div>
    </footer>
  );
};

export default Footer;
