import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="Name flex items-center space-x-0 text-2xl font-bold ">
            <img 
              src="https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751564138/20250703_183039_jbhhfw.png" 
              alt="Logo" 
              className="w-14 h-14 object-contain" 
            />
            <span className='bg-gradient-to-r from-blue-900 to-emerald-900 bg-clip-text text-transparent'>Michael Godwin</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  activeSection === item.href.slice(1) ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  activeSection === item.href.slice(1) ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;