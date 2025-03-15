import React from "react";
import { motion } from "framer-motion";
import { Check, Pickaxe, Sword, Shield, Gem } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MinecraftFeature {
  name: string;
  included: boolean;
}

interface MinecraftPricingCardProps {
  name?: string;
  price?: string;
  description?: string;
  features?: MinecraftFeature[];
  popular?: boolean;
  ctaText?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

const MinecraftPricingCard = ({
  name = "Basic Plan",
  price = "$9.99",
  description = "Perfect for small Minecraft servers",
  features = [
    { name: "2GB RAM", included: true },
    { name: "10 Player Slots", included: true },
    { name: "SSD Storage", included: true },
    { name: "DDoS Protection", included: true },
    { name: "Modpack Support", included: false },
    { name: "Daily Backups", included: false },
  ],
  popular = false,
  ctaText = "Select Plan",
  icon = <Pickaxe className="h-10 w-10 text-lime-500" />,
  onSelect = () => console.log("Plan selected"),
}: MinecraftPricingCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full flex flex-col bg-zinc-900 border-zinc-800 relative overflow-hidden",
          popular ? "border-2 border-lime-500" : "border-zinc-800",
        )}
      >
        {/* Glow effect */}
        {popular && (
          <div className="absolute -inset-0.5 bg-lime-500 opacity-20 blur-sm rounded-xl"></div>
        )}

        {popular && (
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 z-10">
            <span className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse-glow">
              Popular
            </span>
          </div>
        )}

        <CardHeader className="pb-2 relative z-10">
          <div className="mb-2">{icon}</div>
          <CardTitle
            className={cn(
              "text-xl font-bold",
              popular ? "text-lime-500" : "text-white",
            )}
          >
            {name}
          </CardTitle>
          <div className="mt-2">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-zinc-400 ml-1">/month</span>
          </div>
          <CardDescription className="text-zinc-400 mt-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow relative z-10">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div
                  className={cn(
                    "rounded-full p-1 mr-2 mt-0.5",
                    feature.included
                      ? "bg-lime-500/20 text-lime-500"
                      : "bg-zinc-800 text-zinc-500",
                  )}
                >
                  <Check size={12} />
                </div>
                <span
                  className={
                    feature.included ? "text-zinc-200" : "text-zinc-500"
                  }
                >
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="relative z-10">
          <Button
            onClick={onSelect}
            className={cn(
              "w-full relative overflow-hidden group",
              popular
                ? "bg-lime-500 hover:bg-lime-600 text-black animate-pulse-glow"
                : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
            )}
          >
            <span className="relative z-10">{ctaText}</span>
            <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-300"></span>
          </Button>
        </CardFooter>

        {/* Minecraft-themed decorative elements */}
        <div className="absolute top-1/2 right-4 opacity-5 text-lime-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2h16v4h-16v-4zM4 8h16v4h-16v-4zM4 14h16v4h-16v-4zM4 20h16v2h-16v-2z" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 opacity-5 text-lime-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l-12 12h3v12h18v-12h3l-12-12zM12 18v-10l5 5h-3v5h-4v-5h-3l5-5z" />
          </svg>
        </div>
      </Card>
    </motion.div>
  );
};

export default MinecraftPricingCard;
