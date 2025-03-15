import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  name: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({
  name = "John Smith",
  company = "TechCorp",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  rating = 5,
  testimonial = "RaxenCloud has transformed our hosting experience with their reliable service and excellent support.",
}: TestimonialProps) => {
  return (
    <div className="flex flex-col p-6 rounded-lg bg-gray-900 border border-gray-800 h-full">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              "mr-1",
              i < rating ? "fill-lime-500 text-lime-500" : "text-gray-600",
            )}
          />
        ))}
      </div>
      <p className="text-gray-300 flex-grow mb-4">"{testimonial}"</p>
    </div>
  );
};

interface ClientLogoProps {
  name: string;
  logo: string;
}

const ClientLogo = ({
  name = "Company Name",
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=CN",
}: ClientLogoProps) => {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md border border-gray-800 h-20">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-10 opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
  clients?: ClientLogoProps[];
}

const TestimonialsSection = ({
  title = "What Our Clients Say",
  subtitle = "Join thousands of satisfied customers who trust RaxenCloud for their hosting needs",
  testimonials = [
    {
      name: "Sarah Johnson",
      company: "DesignHub",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      testimonial:
        "RaxenCloud's performance has exceeded our expectations. The lime-themed dashboard is not only beautiful but incredibly intuitive.",
    },
    {
      name: "Michael Chen",
      company: "DataSphere",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      testimonial:
        "We migrated from another provider and the difference is night and day. RaxenCloud's support team is responsive and their infrastructure is rock solid.",
    },
    {
      name: "Emily Rodriguez",
      company: "StartupLaunch",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 4,
      testimonial:
        "As a startup, we needed reliable hosting that could scale with us. RaxenCloud delivered exactly what we needed at a price point that made sense.",
    },
    {
      name: "David Wilson",
      company: "TechInnovate",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      testimonial:
        "The speed and reliability of RaxenCloud's servers have significantly improved our website's performance metrics and user experience.",
    },
    {
      name: "Jessica Park",
      company: "CreativeMinds",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      rating: 5,
      testimonial:
        "The dark theme with lime accents isn't just aesthetically pleasing - it makes monitoring our servers at night much easier on the eyes.",
    },
  ],
  clients = [
    {
      name: "TechCorp",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TC",
    },
    {
      name: "InnovateSolutions",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IS",
    },
    {
      name: "DigitalFuture",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DF",
    },
    {
      name: "WebPioneers",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=WP",
    },
    {
      name: "CloudMasters",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CM",
    },
    {
      name: "DataDrive",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DD",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="mb-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <ClientLogo key={index} {...client} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-gray-900"
          >
            View Case Studies <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
