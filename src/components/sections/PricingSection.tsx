import React from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  popular: boolean;
  ctaText: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  showMinecraftLink?: boolean;
}

const PricingSection = ({
  title = "Choose Your Hosting Plan",
  subtitle = "Select the perfect hosting solution for your needs with our flexible pricing options",
  plans = [
    {
      name: "Starter",
      price: "$5.99",
      description: "Perfect for personal projects and blogs",
      features: [
        { name: "15GB SSD Storage", included: true },
        { name: "1 Website", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "99.9% Uptime Guarantee", included: true },
        { name: "24/7 Support", included: false },
        { name: "Daily Backups", included: false },
        { name: "CDN Integration", included: false },
      ],
      popular: false,
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$12.99",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        { name: "50GB SSD Storage", included: true },
        { name: "10 Websites", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "99.9% Uptime Guarantee", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Daily Backups", included: true },
        { name: "CDN Integration", included: false },
      ],
      popular: true,
      ctaText: "Choose Professional",
    },
    {
      name: "Enterprise",
      price: "$29.99",
      description: "Advanced solution for high-traffic websites",
      features: [
        { name: "150GB SSD Storage", included: true },
        { name: "Unlimited Websites", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "99.9% Uptime Guarantee", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Daily Backups", included: true },
        { name: "CDN Integration", included: true },
      ],
      popular: false,
      ctaText: "Contact Sales",
    },
  ],
  showMinecraftLink = true,
}: PricingSectionProps) => {
  return (
    <section className="w-full py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-lime-500">{title.split(" ")[0]}</span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn("h-full", plan.popular ? "lg:-mt-4 lg:mb-4" : "")}
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
                onSelect={() => console.log(`Selected ${plan.name} plan`)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400 text-sm">
            All plans include a 30-day money-back guarantee. Need a custom
            solution?
            <a href="#contact" className="text-lime-500 ml-1 hover:underline">
              Contact our sales team
            </a>
          </p>

          {showMinecraftLink && (
            <div className="mt-6">
              <Link
                to="/minecraft"
                className="inline-flex items-center text-lime-500 hover:text-lime-400 group"
              >
                <span>Check out our specialized Minecraft hosting plans</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
