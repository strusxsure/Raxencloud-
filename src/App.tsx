import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Import directly to avoid lazy loading issues
import MinecraftPage from "./components/minecraft/MinecraftPage";
import MinecraftDomainsPage from "./components/minecraft/MinecraftDomainsPage";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

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
    <>
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
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </>
  );
}

export default App;
