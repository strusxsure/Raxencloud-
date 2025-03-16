import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Import directly to avoid lazy loading issues
import MinecraftPage from "./components/minecraft/MinecraftPage";
import MinecraftDomainsPage from "./components/minecraft/MinecraftDomainsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minecraft" element={<MinecraftPage />} />
        <Route path="/minecraft/domains" element={<MinecraftDomainsPage />} />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </>
  );
}

export default App;
