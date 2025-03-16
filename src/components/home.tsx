import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Home = () => {
  const navigate = useNavigate();
  const [showMinecraftDialog, setShowMinecraftDialog] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSection
          ctaText="Get Started"
          onCtaClick={() => setShowMinecraftDialog(true)}
        />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="pricing">
          <PricingSection showMinecraftLink={true} />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div className="py-20 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Experience Next-Gen Cloud Hosting?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have made the switch
                to RaxenCloud's powerful and reliable hosting platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold px-8 py-6 h-auto text-base animate-pulse-glow"
                  onClick={() => setShowMinecraftDialog(true)}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-lime-500/50 text-lime-500 hover:bg-lime-500/10 hover:text-lime-400 px-8 py-6 h-auto text-base"
                >
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Minecraft redirect dialog */}
      <AnimatePresence mode="wait">
        {showMinecraftDialog && (
          <Dialog
            open={showMinecraftDialog}
            onOpenChange={setShowMinecraftDialog}
          >
            <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-md animate-in fade-in-50 slide-in-from-bottom-10 duration-300">
              <DialogHeader>
                <DialogTitle className="text-lime-500">
                  Minecraft Hosting
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  Explore our specialized Minecraft hosting plans with high
                  performance and low latency.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-3">
                    Why Choose Our Minecraft Hosting?
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-2 mt-0.5">
                        <Check size={12} className="text-lime-500" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        High-performance servers with NVMe SSD storage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-2 mt-0.5">
                        <Check size={12} className="text-lime-500" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        One-click modpack installation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-2 mt-0.5">
                        <Check size={12} className="text-lime-500" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        DDoS protection and 24/7 support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-2 mt-0.5">
                        <Check size={12} className="text-lime-500" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        Plans starting from ₹85/month
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-500/10 p-4 rounded-lg border border-lime-500/20">
                  <p className="text-gray-300 text-sm">
                    Ready to create your perfect Minecraft server? Click below
                    to view our specialized Minecraft hosting plans.
                  </p>
                </div>
              </div>

              <DialogFooter className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setShowMinecraftDialog(false)}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowMinecraftDialog(false);
                    navigate("/minecraft");
                  }}
                  className="bg-lime-500 hover:bg-lime-600 text-black font-medium"
                >
                  View Minecraft Plans
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
