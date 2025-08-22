import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' : 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg py-2'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and institution name */}
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <div className="absolute -inset-1  rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={logo}
              alt="Sri Gurukula Group of Institutions Logo"
              className="h-20 w-auto rounded-lg relative transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h1 className="text-xl font-bold hidden md:block font-serif  ">
            Sri Gurukula Group<br />of Institutions
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-1">
            <li>
              <a 
                href="/" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/academics" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                Academics
              </a>
            </li>
            <li>
              <a 
                href="/faculty" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                Faculty
              </a>
            </li>
            <li>
              <a 
                href="/facilities" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                Facilities
              </a>
            </li>
            <li>
              <a 
                href="/news" 
                className="relative group px-4 py-5 font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                News & Events
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="relative group ml-2 px-4 py-3 font-medium text-gray-700  rounded-lg  transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:text-indigo-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6 transform transition-transform duration-300 rotate-90" />
          ) : (
            <FiMenu className="h-6 w-6 transform transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu with animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white border-t border-gray-100 shadow-inner">
          <ul className="container mx-auto px-4 py-3 space-y-1">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Academics", path: "/academics" },
              { name: "Faculty", path: "/faculty" },
              { name: "Facilities", path: "/facilities" },
              { name: "News & Events", path: "/news" },
              { name: "Contact Us", path: "/contact", highlight: true }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href={item.path} 
                  onClick={handleLinkClick}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 ${item.highlight ? 'bg-indigo-50 text-indigo-700 border-indigo-500' : ''}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;