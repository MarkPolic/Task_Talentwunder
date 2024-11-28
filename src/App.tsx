// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import CandidateProfiles from "./pages/CandidateProfiles";
import CandidateDetailsPage from "./pages/CandidateDetailsPage";
import { OrganizationProvider } from "./contexts/OrganizationContext";

const App: React.FC = () => {
  return (
    <OrganizationProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CandidateProfiles />} />
          <Route path="/candidate/:id" element={<CandidateDetailsPage />} />
        </Routes>
      </div>
    </OrganizationProvider>
  );
};

export default App;
