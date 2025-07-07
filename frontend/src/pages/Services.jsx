import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // icon for feature bullet

const ServiceCard = ({ title, tagline, description, features, image }) => {
  const [showMore, setShowMore] = useState(false);

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 
        flex flex-col transition-all duration-300 group 
        hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl shadow-md mb-4 
        group-hover:shadow-orange-400 transition-all duration-300"
      />

      <div>
        <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-1">{title}</h3>
        <p className="text-xs italic text-gray-300 mb-2">{tagline}</p>
        <p className="text-sm text-gray-100 mb-3">
          {showMore || description.length <= 120
            ? description
            : description.slice(0, 120) + "..."}
          {description.length > 120 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="ml-2 text-orange-400 hover:underline text-xs"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          )}
        </p>

        <ul className="text-sm space-y-2 text-white/90">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle className="text-orange-400 w-4 h-4 mt-0.5" />
              {feature.point}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleCTAClick}
          className="relative group px-4 py-1.5 text-sm font-semibold rounded-full 
          bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md 
          hover:scale-105 transition duration-300"
        >
          Let’s Talk
          <span className="absolute inset-0 rounded-full border border-orange-300 blur-sm 
            opacity-20 group-hover:opacity-60 animate-pulse" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [groupedServices, setGroupedServices] = useState({});

  useEffect(() => {
    axios
      .get("http://192.168.31.164:8000/api/services/")
      .then((res) => {
        setServices(res.data);
        const grouped = res.data.reduce((acc, service) => {
          const category = service.category;
          if (!acc[category]) acc[category] = [];
          acc[category].push(service);
          return acc;
        }, {});
        setGroupedServices(grouped);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const getCategoryLabel = (key) => {
    const map = {
      ai_automation: "AI-Powered Automation & Agents",
      data_platform: "Data Engineering & Intelligence",
      business_insight: "Business Intelligence & Analytics",
      web_development_support: "Custom Web Development & Support",
    };
    return map[key] || key;
  };

  return (
    <section
      id="services"
      className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-20 bg-gray-900"
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/src/assets/service.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 tracking-wide">
          My <span className="text-orange-400">Services</span>
        </h2>

        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-center px-8 py-2 mb-8
                bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-full
                border-2 border-orange-400 shadow-lg hover:shadow-orange-500/60 
                transition-transform duration-500 hover:scale-105 w-fit mx-auto"
            >
              <span className="mr-2 text-3xl">
                {category === "ai_automation" && "🤖"}
                {category === "data_platform" && "🧠"}
                {category === "business_insight" && "📊"}
                {category === "web_development_support" && "🛠️"}
              </span>
              {getCategoryLabel(category)}
            </motion.h3>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  tagline={service.tagline}
                  description={service.description}
                  features={service.features}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
