//path: src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ExoticTravels</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Discover the world's most amazing destinations with our expert-crafted travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@exotictravels.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-400">123 Travel Street, Adventure City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Leonardo Medeiros de Almeida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;