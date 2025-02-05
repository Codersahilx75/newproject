import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../layout/Header";
import Fixcontent from "../layout/Fixcontent";
import Bottomcontent from "../layout/Bottomcontent";
import Footer from "../layout/Footer";
import AppRoutes from "../Routes/AppRoutes"; // Import the routes

export default function Dashboard() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const checkFooterVisibility = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsFooterVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", checkFooterVisibility);
    checkFooterVisibility(); // Run on mount

    return () => window.removeEventListener("scroll", checkFooterVisibility);
  }, []);

  return (
    <div className="flex flex-col min-h-screen responced">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Wrapper */}
      <div className="lg:flex flex-1 mt-5">
        {/* Sidebar (Fixcontent) */}
        <div
          className={`lg:w-1/4 w-full transition-all duration-300 ${
            isFooterVisible ? "lg:relative lg:h-auto" : "lg:fixed lg:h-screen lg:overflow-auto"
          }`}
        >
          <Fixcontent />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 w-full lg:ml-[25%] overflow-y-auto">
          <AppRoutes />
        </div>
      </div>

      {/* Show Bottomcontent only on Home page and on small screens */}
      <div className="lg:hidden block">
        {isHomePage && <Bottomcontent className="md:hidden lg:hidden block" />}
      </div>

      {/* Fixed Footer */}
      <Footer id="footer" />
    </div>
  );
}
