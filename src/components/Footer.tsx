import React from 'react';
import { Heart, ArrowUp, Github } from 'lucide-react';
import { FaBehance, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: 'GitHub', url: '#' },
    { icon: <FaInstagram className="w-6 h-6" />, name: 'Instagram', url: '#' },
    { icon: <FaBehance className="w-6 h-6" />, name: 'Behance', url: '#' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6 transform -translate-y-1/2 animate-bounce" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Michael Godwin</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Front-end Developer and graphic designer passionate about creating digital experiences & stunning graphic
              campagin that make a difference. Always learning, always growing.
            </p>
            <div className="flex space-x-1">
              {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full hover:transition-all duration-300 transform hover:scale-110 group"
                  >
                    <div className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>Ojo, Lagos, Nigeria</p>
              <p>mickeygodwin07@gmail.com</p>
              <p>+234 813 943 7616</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-4">
                Available for freelance opportunities
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-full animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Open to work
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Michael Godwin. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;