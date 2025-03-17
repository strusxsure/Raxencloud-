import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Import directly to avoid lazy loading issues
import MinecraftPage from "./components/minecraft/MinecraftPage";
import MinecraftDomainsPage from "./components/minecraft/MinecraftDomainsPage";
import AuthPage from "./components/auth/AuthPage";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "./components/ui/toaster";

// Layout component to wrap routes with Navbar and Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/minecraft"
          element={
            <Layout>
              <MinecraftPage />
            </Layout>
          }
        />
        <Route
          path="/minecraft/domains"
          element={
            <Layout>
              <MinecraftDomainsPage />
            </Layout>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<Navigate to="/auth" />} />
        <Route
          path="/register"
          element={<Navigate to="/auth?tab=register" />}
        />
        <Route path="/forgot-password" element={<AuthPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/account"
            element={
              <Layout>
                <div className="min-h-screen bg-black py-20 px-4">
                  <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                    <h1 className="text-2xl font-bold text-white mb-6">
                      Account Settings
                    </h1>
                    <p className="text-gray-400">
                      This page is protected and only visible to logged-in
                      users.
                    </p>
                  </div>
                </div>
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <div className="min-h-screen bg-black py-20 px-4">
                  <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                    <h1 className="text-2xl font-bold text-white mb-6">
                      User Settings
                    </h1>
                    <p className="text-gray-400">
                      This page is protected and only visible to logged-in
                      users.
                    </p>
                  </div>
                </div>
              </Layout>
            }
          />
        </Route>

        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </AuthProvider>
  );
}

export default App;
