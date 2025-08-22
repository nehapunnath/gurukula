import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 pt-12 pb-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Institution information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Sri Gurukula Group of Institutions
            </h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Empowering students with quality education, modern facilities, and a nurturing environment 
              to become future leaders and responsible global citizens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-400 p-2 rounded-full transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-500 p-2 rounded-full transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-500 p-2 rounded-full transition-colors duration-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Campus Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Research</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Education Street, Knowledge City, State - 560001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@srigurukula.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
        

        
      </div>
    </footer>
  );
};

export default Footer;