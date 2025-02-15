import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-gray-900">ExoticTravels</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;