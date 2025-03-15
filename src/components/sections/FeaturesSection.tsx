import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Server, Shield, Zap, Clock, Globe, HeadsetIcon } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon = <Server className="h-10 w-10 text-lime-400" />,
  title = "Feature Title",
  description = "Feature description goes here explaining the benefit in detail.",
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-start p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-lime-500/50 transition-all duration-300 h-full">
      <div className="mb-4 p-3 rounded-full bg-gray-800">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Button
        variant="ghost"
        className="mt-auto text-lime-400 hover:text-lime-300 hover:bg-gray-800 p-0"
      >
        Learn more
      </Button>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Server className="h-10 w-10 text-lime-400" />,
      title: "High-Performance Servers",
      description:
        "Lightning-fast SSD storage and optimized server configurations for maximum performance and reliability.",
    },
    {
      icon: <Shield className="h-10 w-10 text-lime-400" />,
      title: "Advanced Security",
      description:
        "Enterprise-grade security with DDoS protection, SSL certificates, and regular security audits.",
    },
    {
      icon: <Zap className="h-10 w-10 text-lime-400" />,
      title: "Instant Scaling",
      description:
        "Scale your resources up or down instantly to meet demand without any service interruptions.",
    },
    {
      icon: <Clock className="h-10 w-10 text-lime-400" />,
      title: "99.9% Uptime",
      description:
        "Our robust infrastructure ensures your applications stay online with guaranteed uptime SLAs.",
    },
    {
      icon: <Globe className="h-10 w-10 text-lime-400" />,
      title: "Global CDN",
      description:
        "Content delivery network with edge locations worldwide for faster content delivery to your users.",
    },
    {
      icon: <HeadsetIcon className="h-10 w-10 text-lime-400" />,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock technical support from our team of cloud hosting specialists.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Features for Modern Hosting
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            RaxenCloud provides cutting-edge hosting solutions with features
            designed for performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold px-8 py-6 h-auto text-lg rounded-md">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
