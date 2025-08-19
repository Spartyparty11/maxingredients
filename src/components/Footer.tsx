import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-xl shadow-lg">
                <Leaf className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Max Ingredients</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Trusted ingredient sourcing since 2011. We help food manufacturers find fresh, 
              reliable, and cost-effective ingredients delivered nationwide.
            </p>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
                alt="USDA Member certification logo"
                className="h-12 bg-white rounded-lg p-1 shadow-md"
              />
              <span className="text-sm text-gray-300 font-medium">USDA Certified Member</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Quick Links</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              <Link to="/about" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                About Us
              </Link>
              <Link to="/ingredients" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Ingredients
              </Link>
              <Link to="/faqs" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                FAQs
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                </div>
                <a 
                  href="tel:+1-555-MAX-FOOD" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                  aria-label="Call us at 1-555-MAX-FOOD"
                >
                  1-555-MAX-FOOD
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                </div>
                <a 
                  href="mailto:info@maxingredients.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  info@maxingredients.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-orange-400" aria-hidden="true" />
                </div>
                <span className="text-gray-300 font-medium">
                  Chicago, IL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Max Ingredients. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;