import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name?: string;
  price?: string;
  description?: string;
  features?: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  onSelect?: () => void;
}

const PricingCard = ({
  name = "Basic Plan",
  price = "$9.99",
  description = "Perfect for small projects and personal websites",
  features = [
    { name: "10GB SSD Storage", included: true },
    { name: "1 Website", included: true },
    { name: "Free SSL Certificate", included: true },
    { name: "24/7 Support", included: false },
    { name: "Daily Backups", included: false },
  ],
  popular = false,
  ctaText = "Select Plan",
  onSelect = () => console.log("Plan selected"),
}: PricingCardProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full"
        onClick={() => setShowDialog(true)}
      >
        <Card
          className={cn(
            "h-full flex flex-col bg-gray-950 border-gray-800 relative overflow-hidden",
            popular ? "border-2 border-lime-500" : "border-gray-800",
          )}
        >
          {/* Glow effect for popular plans */}
          {popular && (
            <div className="absolute -inset-0.5 bg-lime-500 opacity-20 blur-sm rounded-lg"></div>
          )}

          <div className="relative h-full flex flex-col z-10">
            {popular && (
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <span className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}

            <CardHeader className="pb-2">
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
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <CardDescription className="text-gray-400 mt-2">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={cn(
                        "rounded-full p-1 mr-2 mt-0.5",
                        feature.included
                          ? "bg-lime-500/20 text-lime-500"
                          : "bg-gray-800 text-gray-500",
                      )}
                    >
                      {feature.included ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span
                      className={
                        feature.included ? "text-gray-200" : "text-gray-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={cn(
                  "w-full",
                  popular
                    ? "bg-lime-500 hover:bg-lime-600 text-black font-medium"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
                )}
              >
                {ctaText}
              </Button>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      <AnimatePresence mode="wait">
        {showDialog && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-md animate-in fade-in-50 slide-in-from-bottom-10 duration-300">
              <DialogHeader>
                <DialogTitle
                  className={popular ? "text-lime-500" : "text-white"}
                >
                  {name} Details
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  Complete details about the {name.toLowerCase()} and its
                  features.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {price}
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </h3>
                  <p className="text-gray-400">{description}</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-3">All Features</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div
                          className={cn(
                            "rounded-full p-1 mr-2 mt-0.5",
                            feature.included
                              ? "bg-lime-500/20 text-lime-500"
                              : "bg-gray-700 text-gray-500",
                          )}
                        >
                          {feature.included ? (
                            <Check size={12} />
                          ) : (
                            <X size={12} />
                          )}
                        </div>
                        <span
                          className={
                            feature.included ? "text-gray-200" : "text-gray-500"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">
                    Additional Benefits
                  </h4>
                  <p className="text-gray-400 text-sm">
                    30-day money-back guarantee, 24/7 technical support, and
                    free migration assistance.
                  </p>
                </div>
              </div>

              <DialogFooter>
                <Button
                  onClick={() => {
                    setShowDialog(false);
                    onSelect();
                  }}
                  className={cn(
                    "w-full",
                    popular
                      ? "bg-lime-500 hover:bg-lime-600 text-black font-medium"
                      : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
                  )}
                >
                  {ctaText}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PricingCard;
