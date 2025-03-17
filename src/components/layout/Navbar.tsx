import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "@/lib/auth";
import UserMenu from "./UserMenu";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Server,
  Shield,
  Headphones,
  LifeBuoy,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const services = [
    {
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure for your applications",
      icon: <Server className="h-5 w-5 text-lime-500" />,
      href: "/services/cloud-hosting",
    },
    {
      title: "Security Solutions",
      description: "Enterprise-grade security for your data",
      icon: <Shield className="h-5 w-5 text-lime-500" />,
      href: "/services/security",
    },
    {
      title: "Managed Services",
      description: "Let our experts handle your infrastructure",
      icon: <Settings className="h-5 w-5 text-lime-500" />,
      href: "/services/managed",
    },
    {
      title: "Dedicated Hosting",
      description: "High-performance dedicated servers",
      icon: <Server className="h-5 w-5 text-lime-500" />,
      href: "/services/dedicated",
    },
    {
      title: "Minecraft Domains",
      description: "Affordable domain names for your Minecraft server",
      icon: <Server className="h-5 w-5 text-lime-500" />,
      href: "/minecraft/domains",
    },
  ];

  const support = [
    {
      title: "Help Center",
      description: "Find answers to common questions",
      icon: <LifeBuoy className="h-5 w-5 text-lime-500" />,
      href: "/support/help-center",
    },
    {
      title: "Technical Support",
      description: "Get assistance from our technical team",
      icon: <Headphones className="h-5 w-5 text-lime-500" />,
      href: "/support/technical",
    },
    {
      title: "Community",
      description: "Join our community of developers",
      icon: <Users className="h-5 w-5 text-lime-500" />,
      href: "/support/community",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative h-8 w-8 rounded-full bg-lime-500 overflow-hidden transition-all duration-300 group-hover:scale-110">
            <img
              src="https://i.imgur.com/tBBSN7y.jpeg"
              alt="RaxenCloud Logo"
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-1 rounded-full bg-black group-hover:scale-90 transition-transform duration-300"></div>
          </div>
          <span className="text-xl font-bold text-white relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-lime-400 transition-all duration-500 group-hover:from-lime-400 group-hover:to-white">
              RaxenCloud
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800 hover:text-lime-400">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gray-900 p-6 no-underline outline-none hover:bg-gray-800 hover:text-lime-400"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {service.icon}
                              <div className="text-sm font-medium text-white">
                                {service.title}
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800 hover:text-lime-400">
                  Support
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {support.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gray-900 p-6 no-underline outline-none hover:bg-gray-800 hover:text-lime-400"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {item.icon}
                              <div className="text-sm font-medium text-white">
                                {item.title}
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-lime-400",
                    )}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-lime-400",
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="text-white hover:text-lime-400 hover:bg-gray-800"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  className="bg-lime-500 text-black hover:bg-lime-400"
                  asChild
                >
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-900 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="relative h-8 w-8 rounded-full bg-lime-500 overflow-hidden">
                      <img
                        src="https://i.imgur.com/tBBSN7y.jpeg"
                        alt="RaxenCloud Logo"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xl font-bold text-white">
                      RaxenCloud
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex-1 overflow-auto py-4 px-6">
                  <nav className="flex flex-col space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Services
                      </h3>
                      <ul className="space-y-3">
                        {services.map((service) => (
                          <li key={service.title}>
                            <Link
                              to={service.href}
                              className="flex items-center text-white hover:text-lime-400"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="mr-3">{service.icon}</span>
                              <span>{service.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Support
                      </h3>
                      <ul className="space-y-3">
                        {support.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.href}
                              className="flex items-center text-white hover:text-lime-400"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="mr-3">{item.icon}</span>
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Pages
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            to="/pricing"
                            className="text-white hover:text-lime-400"
                            onClick={() => setIsOpen(false)}
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            className="text-white hover:text-lime-400"
                            onClick={() => setIsOpen(false)}
                          >
                            About
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div className="p-6 border-t border-gray-800">
                  {user ? (
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-white hover:bg-gray-800 hover:text-red-400"
                      onClick={async () => {
                        await signOut();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4 text-red-500" />
                      Log out
                    </Button>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 text-white hover:bg-gray-800 hover:text-lime-400"
                        asChild
                      >
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button
                        className="w-full bg-lime-500 text-black hover:bg-lime-400"
                        asChild
                      >
                        <Link to="/register" onClick={() => setIsOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
