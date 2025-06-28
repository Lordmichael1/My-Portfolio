import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import myphoto from "../Assets/myphoto.jpg"

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Profile Image */}
          <div className="pt-12 md:pt-13 mb-8 relative">
            <div className=" w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={myphoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top--30 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute -top-1 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute -top-1 -left-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute -top--30 -left-2 w-6 h-6 bg-blue-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
                Michael Godwin
              </h1>
              <h2 className="text-base sm:text-lg md:text-2xl text-blue-600 font-semibold">
                  Creative Technologist | Frontend developer | Graphic designer
              </h2>
            </div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional web experiences that bridge the gap between design and technology. 
              Passionate about creating solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50">
                <Github className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50">
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50">
                <Mail className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              </a>
            </div> */}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => {
              window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
            }}
            className="text-blue-600 font-semibold transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

          