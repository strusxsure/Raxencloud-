import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MinecraftPricingCard from "@/components/minecraft/MinecraftPricingCard";
import { Button } from "@/components/ui/button";
import {
  Pickaxe,
  Sword,
  Shield,
  Gem,
  Server,
  ArrowLeft,
  Check,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const MinecraftPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Born Polio",
      price: "₹85",
      description: "Basic plan for small servers",
      icon: <Pickaxe className="h-10 w-10 text-gray-400" />,
      features: [
        { name: "2GB RAM", included: true },
        { name: "75% CPU", included: true },
        { name: "10GB SSD", included: true },
        { name: "1 Database", included: true },
        { name: "1 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Born Polio",
    },
    {
      name: "Chota Polio",
      price: "₹160",
      description: "Great for small communities",
      icon: <Sword className="h-10 w-10 text-lime-500" />,
      features: [
        { name: "4GB RAM", included: true },
        { name: "100% CPU", included: true },
        { name: "15GB SSD", included: true },
        { name: "2 Database", included: true },
        { name: "2 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Chota Polio",
    },
    {
      name: "SMP Plan",
      price: "₹200",
      description: "Perfect for survival multiplayer servers",
      icon: <Gem className="h-10 w-10 text-blue-400" />,
      features: [
        { name: "6GB RAM", included: true },
        { name: "150% CPU", included: true },
        { name: "25GB SSD", included: true },
        { name: "2 Database", included: true },
        { name: "4 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: true,
      ctaText: "Choose SMP Plan",
    },
    {
      name: "Bada Polio",
      price: "₹250",
      description: "For growing communities with plugins",
      icon: <Server className="h-10 w-10 text-green-400" />,
      features: [
        { name: "8GB RAM", included: true },
        { name: "200% CPU", included: true },
        { name: "35GB SSD", included: true },
        { name: "4 Database", included: true },
        { name: "5 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Bada Polio",
    },
    {
      name: "Choki Dar",
      price: "₹400",
      description: "Advanced solution for modded servers",
      icon: <Shield className="h-10 w-10 text-yellow-400" />,
      features: [
        { name: "12GB RAM", included: true },
        { name: "250% CPU", included: true },
        { name: "45GB SSD", included: true },
        { name: "4 Database", included: true },
        { name: "5 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Choki Dar",
    },
    {
      name: "Guard",
      price: "₹590",
      description: "High-performance for large communities",
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      features: [
        { name: "16GB RAM", included: true },
        { name: "400% CPU", included: true },
        { name: "50GB SSD", included: true },
        { name: "6 Database", included: true },
        { name: "6 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Guard Plan",
    },
    {
      name: "Minister",
      price: "₹1,150",
      description: "Ultimate performance for large networks",
      icon: <Server className="h-10 w-10 text-red-400" />,
      features: [
        { name: "32GB RAM", included: true },
        { name: "800% CPU", included: true },
        { name: "128GB SSD", included: true },
        { name: "8 Database", included: true },
        { name: "8 Backup", included: true },
        { name: "TPS Stability", included: true },
        { name: "Unmetered Bandwidth", included: true },
      ],
      popular: false,
      ctaText: "Choose Minister Plan",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?w=1200&q=80')] bg-cover bg-center opacity-10 z-0"></div>

        {/* Minecraft-themed particles */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-lime-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-lime-500 hover:text-lime-400 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-lime-500">Minecraft</span> Server Hosting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              High-performance, low-latency Minecraft servers with instant setup
              and 24/7 support. Choose the perfect plan for your Minecraft
              community.
            </p>
          </motion.div>

          {/* Minecraft-themed features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-lime-500/20 p-3 rounded-lg inline-block mb-4">
                  <Server className="h-8 w-8 text-lime-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  One-Click Installation
                </h3>
                <p className="text-gray-400">
                  Get your Minecraft server up and running in seconds with our
                  streamlined setup process.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-lime-500/20 p-3 rounded-lg inline-block mb-4">
                  <Shield className="h-8 w-8 text-lime-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  DDoS Protection
                </h3>
                <p className="text-gray-400">
                  Enterprise-grade protection keeps your server safe from
                  attacks and ensures consistent uptime.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-lime-500/20 p-3 rounded-lg inline-block mb-4">
                  <Sword className="h-8 w-8 text-lime-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Mod Support
                </h3>
                <p className="text-gray-400">
                  Easy installation of popular modpacks and plugins with our
                  custom control panel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Choose Your <span className="text-lime-500">Minecraft</span> Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your Minecraft server needs. All plans
              include TPS stability, great customer support, unmetered
              bandwidth, and high-speed network on AMD EPYC processors.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              <span className="text-lime-500">Location:</span> 🇮🇳 India |{" "}
              <span className="text-lime-500">Easy Game Panel</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MinecraftPricingCard
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  ctaText={plan.ctaText}
                  icon={plan.icon}
                  onSelect={() => setSelectedPlan(plan)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              For buying a server, please create a ticket on our Discord server.
            </p>
            <a
              href="https://discord.com/channels/1310975806247272572/1310976309266087947"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-lime-500/30 hover:border-lime-500 group relative overflow-hidden">
                <span className="relative z-10">Create Ticket on Discord</span>
                <span className="absolute inset-0 w-0 bg-lime-500/20 group-hover:w-full transition-all duration-300"></span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Minecraft-specific features */}
      <section className="py-20 px-4 bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-lime-500">RaxenCloud</span> for
              Minecraft?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our specialized Minecraft hosting provides the best experience for
              players and server administrators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Server Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      NVMe SSD Storage
                    </h4>
                    <p className="text-gray-400">
                      Ultra-fast storage for quick world loading and chunk
                      generation
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Global Network</h4>
                    <p className="text-gray-400">
                      Servers in multiple locations for low-latency gameplay
                      worldwide
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Automatic Backups
                    </h4>
                    <p className="text-gray-400">
                      Regular backups with one-click restoration to prevent data
                      loss
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Scalable Resources
                    </h4>
                    <p className="text-gray-400">
                      Easily upgrade your server as your community grows
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Control Panel
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      One-Click Modpack Installation
                    </h4>
                    <p className="text-gray-400">
                      Install popular modpacks with a single click
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Player Management
                    </h4>
                    <p className="text-gray-400">
                      Easily manage whitelist, ops, and bans from the web panel
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Console Access</h4>
                    <p className="text-gray-400">
                      Full console access with command history and
                      auto-completion
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-lime-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">File Manager</h4>
                    <p className="text-gray-400">
                      Upload and manage plugins, mods, and world files with ease
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Minecraft server showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to start your Minecraft adventure?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Join thousands of satisfied server owners who trust
                    RaxenCloud for their Minecraft hosting needs.
                  </p>
                  <a
                    href="https://discord.com/channels/1310975806247272572/1310976309266087947"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold animate-pulse-glow">
                      Get Started Now
                    </Button>
                  </a>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=800&q=80"
                    alt="Minecraft Server"
                    className="rounded-lg border border-gray-700 shadow-xl shadow-lime-500/10 w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Plan selection dialog */}
      <AnimatePresence>
        {selectedPlan && (
          <Dialog
            open={!!selectedPlan}
            onOpenChange={() => setSelectedPlan(null)}
          >
            <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  {selectedPlan.icon && <div>{selectedPlan.icon}</div>}
                  <DialogTitle
                    className={
                      selectedPlan.popular ? "text-lime-500" : "text-white"
                    }
                  >
                    {selectedPlan.name} Plan Selected
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-400">
                  You've selected the {selectedPlan.name} plan. Here's what
                  happens next.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Next Steps</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-lime-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          Create a Discord Ticket
                        </h5>
                        <p className="text-gray-400 text-sm">
                          Join our Discord server and create a ticket to start
                          the purchase process
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-lime-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          Payment Processing
                        </h5>
                        <p className="text-gray-400 text-sm">
                          Our team will guide you through the payment options
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-lime-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Server Setup</h5>
                        <p className="text-gray-400 text-sm">
                          Your server will be set up within minutes after
                          payment confirmation
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-500/10 p-4 rounded-lg border border-lime-500/20">
                  <div className="flex items-start">
                    <div className="bg-lime-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-lime-500" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Plan Summary</h5>
                      <p className="text-gray-400 text-sm">
                        {selectedPlan.name} - {selectedPlan.price}/month
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {selectedPlan.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setSelectedPlan(null)}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Cancel
                </Button>
                <a
                  href="https://discord.com/channels/1310975806247272572/1310976309266087947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium">
                    Create Ticket on Discord
                  </Button>
                </a>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MinecraftPage;
