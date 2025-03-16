import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MinecraftDomainsPage = () => {
  const domains = [
    { name: ".fun", price: 100 },
    { name: ".online", price: 135 },
    { name: ".xyz", price: 225 },
    { name: ".in", price: 399 },
    { name: ".site", price: 125 },
    { name: ".io", price: 375 },
    { name: ".com", price: 599 },
    { name: ".org", price: 185 },
    { name: ".tech", price: 220 },
    { name: ".store", price: 220 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?w=1200&q=80')] bg-cover bg-center opacity-10 z-0"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-lime-500">Minecraft</span> Domain Names
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Secure your perfect Minecraft server domain name with our
              affordable options. All domains come with free DNS management and
              easy configuration for your server.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                variants={itemVariants}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-lime-500 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                      {domain.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-white">
                        ₹{domain.price}
                      </span>
                      <span className="text-gray-400 text-sm">/year</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-gray-400 text-sm">
                      Perfect for Minecraft servers
                    </div>
                    <button className="flex items-center space-x-1 text-lime-500 hover:text-lime-400 transition-colors duration-300 group">
                      <span>Register</span>
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Why Choose Our Domains for Your Minecraft Server?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-lime-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Easy DNS Configuration
                    </h3>
                    <p className="text-gray-400">
                      Simple setup for your Minecraft server with our intuitive
                      DNS management panel.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-lime-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Free WHOIS Privacy
                    </h3>
                    <p className="text-gray-400">
                      Keep your personal information private with complimentary
                      WHOIS privacy protection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-lime-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">24/7 Support</h3>
                    <p className="text-gray-400">
                      Our dedicated support team is available around the clock
                      to assist with any domain-related issues.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MinecraftDomainsPage;
