// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// Import the Footer component
import Footer from "./components/Footer"; 
import SocialMedia from "./pages/SocialMedia";
import SEO from "./pages/SEO";
import WebDevelopment from "./pages/WebDevelopment";
import PaidAds from "./pages/PaidAds";
import ReputationManagement from "./pages/ReputationManagement";
import Work from "./pages/Work";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<SocialMedia />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/paid-ads" element={<PaidAds />} />
          <Route path="/reputation-management" element={<ReputationManagement />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
      {/* The Footer is now added below the content div */}
      <Footer /> 
    </Router>
  );
}

export default App;