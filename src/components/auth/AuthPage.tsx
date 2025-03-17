import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Mail,
  Lock,
  User,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [error, setError] = useState<string | null>(null);

  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Check for tab parameter in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab === "register") {
      setActiveTab("register");
    }
  }, [location]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await signIn(formData.email, formData.password);

      if (error) {
        setError(error.message || "Failed to sign in");
        toast({
          variant: "destructive",
          title: "Login failed",
          description:
            error.message || "Please check your credentials and try again",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in",
        });
        navigate("/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await signUp(
        formData.email,
        formData.password,
        formData.fullName,
      );

      if (error) {
        setError(error.message || "Failed to create account");
        toast({
          variant: "destructive",
          title: "Registration failed",
          description:
            error.message || "Please check your information and try again",
        });
      } else {
        toast({
          title: "Account created!",
          description: "Please check your email to confirm your account",
        });
        // Switch to login tab after successful registration
        setActiveTab("login");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 bg-grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="relative h-10 w-10 rounded-full bg-lime-500 overflow-hidden transition-all duration-300 group-hover:scale-110">
              <img
                src="https://i.imgur.com/tBBSN7y.jpeg"
                alt="RaxenCloud Logo"
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-1 rounded-full bg-black group-hover:scale-90 transition-transform duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-lime-400 transition-all duration-500 group-hover:from-lime-400 group-hover:to-white">
                RaxenCloud
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </div>

        <Card className="border-gray-800 bg-gray-900/80 backdrop-blur-sm animate-pulse-glow">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-10 w-10 text-lime-500" />
            </div>
            <CardTitle className="text-2xl text-center text-white">
              {activeTab === "login" ? "Welcome back" : "Create an account"}
            </CardTitle>
            <CardDescription className="text-gray-400 text-center">
              {activeTab === "login"
                ? "Enter your credentials to access your account"
                : "Fill in your details to create a new account"}
            </CardDescription>
          </CardHeader>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-lime-400"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-lime-400"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {error && (
              <div className="mx-6 mt-4 p-3 bg-red-900/30 border border-red-800 rounded-md flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-gray-300">
                        Password
                      </Label>
                      <Link
                        to="/forgot-password"
                        className="text-xs text-lime-500 hover:text-lime-400"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-lime-500 text-black hover:bg-lime-400 flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Logging in...</span>
                      </>
                    ) : (
                      <>
                        <span>Login</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-300">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-white focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-lime-500 text-black hover:bg-lime-400 flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By continuing, you agree to RaxenCloud's</p>
          <div className="flex justify-center space-x-3 mt-1">
            <Link to="/terms" className="text-lime-500 hover:text-lime-400">
              Terms of Service
            </Link>
            <span>&</span>
            <Link to="/privacy" className="text-lime-500 hover:text-lime-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
