// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CookieBanner from './components/Banner'; // ✅ Import added



import React from "react";
import { Routes, Route } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers/Careers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard"; // <-- added this
import ProtectedRoute from "./components/ProtectedRoute"; // Make sure the path is correct
import Developer from "./pages/Cards/Developer";
import Cloud from "./pages/Rolerate/Cloud";
import ScrollToTopButton from "./pages/Toparrow";
import ConnectPage from "./pages/Cards/ConnectPage";
import Staffing from "./pages/Cards/Staffing";
import Staffingrate from "./pages/Rolerate/Staffingrate";
import Digitalmarketingstats from "./pages/Rolerate/Digitalmarketingstats";
import DigitalMarketing from "./pages/Cards/Digitalmarketing";
import Contactusbutton from "./pages/Contactusbutton";
import Trustedbrands from "./pages/Trustedbrands";
import TeamCategories from "./pages/Team/Teamcategories";
import Itteam from "./pages/Team/Itteam";
import HireOptions from "./pages/Team/Hireoptions"
import Demand from "./pages/Team/Demand";
import Whychoosetoptal from "./pages/Team/Whychoosetoptal";
import Clientsatisfaction from "./pages/Team/Clientsatisfaction";
import Dmteam from"./pages/Team/Dmteam";
import Projectmanagerteam from "./pages/Team/Projectmanagerteam";
import ManagementConsultants from "./pages/Team/ManagementConsultants";
import ProductManagers from "./pages/Team/ProductManagers";
import { Import } from "lucide-react";
import ITStaffing from"./pages/Team/ITStaffing"; 
import StrategySection from "././pages/About/StrategySection";
import StatsSection from "./pages/About/StatsSection";
import Splitbanner from "./pages/About/Splitbanner";
import TeamMembers from"./pages/TeamMembers"
function App() {
  const [showBanner, setShowBanner] = useState(true);

  // Function to hide the cookie banner after accept
  const handleAcceptCookies = () => {
    setShowBanner(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  // Check if cookies have already been accepted
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  return (
    <>
      {/* Top navigation */}
      <Navbar />

      {/* Global Cookie Consent Banner with slide-in animation */}
      {showBanner && !cookiesAccepted && (
        <CookieBanner onAccept={handleAcceptCookies} />
      )}

      {/* Page content */}
      <main className="pt-24 bg-gray-950 text-white flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* Protect Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/developer" element={<Developer />} />
          <Route path="/Cloud" element={<Cloud />} />
          <Route path="/ScrollToTopButton" element={<ScrollToTopButton />} />
          <Route path="/ConnectPage" element={<ConnectPage />} />
          <Route path="/Staffing" element={<Staffing />} />
          <Route path="/Staffingrate" element={<Staffingrate />} />
          <Route
            path="/Digitalmarketingstats"
            element={<Digitalmarketingstats />}
          />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/Contactusbutton" element={<Contactusbutton />} />
          <Route path="/Trustedbrands" element={<Trustedbrands />} />
          <Route path="/TeamCategories " element={<TeamCategories />} />
          <Route path="/itteam" element={<Itteam />} />
          <Route path="/HireOptions" element={ <HireOptions/>} />
          <Route path="/Demand" element={ <Demand/>} />
          <Route path="/WhyChooseToptal" element={<Whychoosetoptal/>} />
          <Route path="/Clientsatisfaction" element={<Clientsatisfaction/>} />
          <Route path="/Dmteam" element={<Dmteam/>} />
          <Route path="/Projectmanagerteam" element={<Projectmanagerteam/>} />
          <Route path="/ManagementConsultants" element={<ManagementConsultants/>} />
          <Route path="/ProductManagers" element={<ProductManagers/>} />
          <Route path="/ITStaffing" element={<ITStaffing/>} />
          <Route path="/StrategySection" element={<StrategySection/>} />
          <Route path="/StatsSection.jsx" element={<StatsSection/>} />
          <Route path="/Splitbanner" element={<Splitbanner/>} />
          <Route path="/TeamMembers" element={<TeamMembers/>} />
        </Routes>

      </main>
      <Footer/>
    </>
  );
}

export default App;

