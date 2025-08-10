import React, { useState } from 'react';
import { Menu, X, User, Home, Leaf, GraduationCap, Users } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Icon */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-700 rounded-lg flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <button className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Users size={20} />
              </button>
              <span className="text-xs mt-1 text-gray-700">Join Us</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200">
                <Leaf size={20} />
              </button>
              <span className="text-xs mt-1 text-gray-700">Village</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <GraduationCap size={20} />
              </button>
              <span className="text-xs mt-1 text-gray-700">Gurukula</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Home size={18} />
              </button>
              <span className="text-[10px] mt-0.5 text-gray-700">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200">
                <Leaf size={18} />
              </button>
              <span className="text-[10px] mt-0.5 text-gray-700">Village</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <GraduationCap size={18} />
              </button>
              <span className="text-[10px] mt-0.5 text-gray-700">Gurukula</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Users size={18} />
              </button>
              <span className="text-[10px] mt-0.5 text-gray-700">Join Us</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="pt-2 border-t border-gray-200">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-500">About Us</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Events</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Resources</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
