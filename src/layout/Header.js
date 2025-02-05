import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../assets/data/navdata"; // Import the nav items
import logo from "../assets/img/logo.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyles =
    "p-4 lg:p-2 flex items-center space-x-2 hover:text-purple-600 rounded-md transition";

  const activeLinkStyles = "bg-gray-200 text-gray-900 rounded-md";

  const isActiveLink = (path) => {
    return (
      location.pathname === path || (location.pathname === "/" && path === "/")
    );
  };

  return (
    <header
      className={`sticky top-0 w-full rounded-2xl shadow-md transition ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-28 lg:w-40 h-auto" />
        </div>

        {/* Navbar Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkStyles} ${isActive || isActiveLink(item.to) ? activeLinkStyles : ""}`
              }
            >
              <i className={item.icon}></i>
              <span className="text-lg">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Dark Mode Toggle & Resume Button */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hover:text-purple-600">
            <i className={`fas fa-${darkMode ? "sun" : "moon"} text-2xl`}></i>
          </button>
          <a
            href="/path/to/resume.pdf"
            className="bg-gray-800 text-white hover:text-purple-600 px-6 py-3 rounded-md  text-md"
          >
            <i className="fas fa-download"></i> Resume
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none"
          >
            <i
              className={`fas fa-${isMenuOpen ? "times" : "bars"} text-3xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} md:hidden px-4 shadow-md`}
      >
        <ul className="space-y-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkStyles} ${isActive || isActiveLink(item.to) ? activeLinkStyles : ""}`
              }
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}
