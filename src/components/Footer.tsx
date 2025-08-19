import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              <span className="text-2xl font-bold">Max Ingredients</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Trusted ingredient sourcing since 2011. We help food manufacturers find fresh, 
              reliable, and cost-effective ingredients delivered nationwide.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
                alt="USDA Member certification logo"
                className="h-12 bg-white rounded p-1"
              />
              <span className="text-sm text-gray-400">USDA Member</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <a 
                  href="tel:+1-555-MAX-FOOD" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  aria-label="Call us at 1-555-MAX-FOOD"
                >
                  1-555-MAX-FOOD
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <a 
                  href="mailto:info@maxingredients.com" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  info@maxingredients.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span className="text-gray-300">
                  Chicago, IL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Max Ingredients. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;