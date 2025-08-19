import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Max Ingredients Home">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-xl group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Leaf className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Max Ingredients</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-semibold transition-all duration-300 relative ${
                  isActive(item.href)
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-md">
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-emerald-100'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-4 mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;