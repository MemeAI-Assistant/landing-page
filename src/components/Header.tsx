import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔍</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MemeFinder
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              How It Works...
            </a>
            <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Team
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Download Button */}
          <div className="hidden md:flex">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <Download size={18} />
              <span>Download</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2">
                How It Works
              </a>
              <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                Team
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2">
                Contact
              </a>
              <div className="pt-3">
                <button className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg">
                  <Download size={18} />
                  <span>Download</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;