import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Database, Shield } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Next-Gen Cloud Hosting with RaxenCloud",
  subtitle = "Experience lightning-fast performance with our cutting-edge infrastructure and 99.9% uptime guarantee.",
  ctaText = "Get Started",
  secondaryCtaText = "Learn More",
  onCtaClick,
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[800px] bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&q=80')] bg-cover bg-center opacity-10 z-0 animate-pulse"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-lime-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Server icons floating animation */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Server className="text-lime-500 w-12 h-12 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Cloud className="text-lime-400 w-16 h-16 opacity-70" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Database className="text-lime-300 w-10 h-10 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Shield className="text-lime-500 w-14 h-14 opacity-50" />
        </motion.div>

        {/* Animated connection lines */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M200,200 C300,100 700,400 900,300"
            stroke="rgba(163, 230, 53, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M300,500 C500,300 800,600 1000,400"
            stroke="rgba(163, 230, 53, 0.15)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-10">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold px-8 py-6 h-auto text-base animate-pulse-glow"
              onClick={onCtaClick}
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-lime-500/50 text-lime-500 hover:bg-lime-500/10 hover:text-lime-400 px-8 py-6 h-auto text-base"
            >
              {secondaryCtaText}
            </Button>
          </motion.div>
        </div>

        {/* Server visualization */}
        <motion.div
          className="mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-2xl shadow-lime-500/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((server) => (
                <div
                  key={server}
                  className="bg-gray-950 border border-gray-800 rounded-lg p-4 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Server className="h-5 w-5 text-lime-500 mr-2" />
                      <span className="text-gray-300 font-medium">
                        Server {server}
                      </span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-lime-500 animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-800 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-800 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-800 rounded-full w-4/6"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-500/0 via-lime-500 to-lime-500/0"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Glowing effect under the server visualization */}
          <div className="absolute -inset-4 bg-lime-500/5 blur-3xl rounded-full -z-10"></div>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
