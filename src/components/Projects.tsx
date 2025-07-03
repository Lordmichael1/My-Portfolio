import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Carousel from './Carousel';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'An e-commerce solution with React, Node.js, and Korapay integration. Features include user authentication, product management, cart functionality, and secure payment processing.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'Javascript','HTML','CSS', 'Korapay'],
      github: 'https://github.com/Lordmichael1/eccommerce-Festac',
      live: '#',
      featured: true,
    },
    {
      title: 'RentWave',
      description: 'A responsive application built with React to help landlords communicate with tenants and help tenants make rent payments. this was a team project for our final project defence at The Curve Africa',
      image: 'https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751319181/rentwave_jomeat.png',
      tags: ['React', 'JavaScript', 'Redux', 'Tailwind', 'MongoDB', 'Node.Js'],
      github: 'https://github.com/Lordmichael1/RentWave',
      live: 'https://rent-wave.vercel.app/',
      featured: true
    },
    {
      title: 'Flyer and Logo Designs',
      description: 'Few of my recent flyer and logo designs.',
      image: 'https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751319092/Behance_vsfhza.jpg',
      tags: ['PixelLab', 'Snapseed', 'Pinterest', 'Photoroom','CorelDraw', 'PhotoShop'],
      live: 'https://www.behance.net/michaelgodwin8',
      featured: false
    },
    {
      title: 'This Portfolio Website',
      description: 'A responsive portfolio website showcasing modern web development practices with smooth animations, and optimized performance.',
      image: 'https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751319092/image_uyruwa.jpg',
      tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
      live: '#',
      featured: false
    },
    {
      title: 'Marketing Site',
      description: 'A responsive application built with React during class time at The Curve Africa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWvBHn8e9DCczkQIxwKuAlytPuC_efTV62w&s',
      tags: ['React', 'JavaScript', 'Redux', 'HTML', 'CSS'],
      live: 'https://github.com/Lordmichael1/Marketing-Site',
      featured: false
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live === '#' ? undefined : project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                    if (project.live === '#') {
                    e.preventDefault();
                    alert("No Live Demo");
                    }
                  }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <a href={project.live}>
                    <div className="cursor-pointer flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <Carousel/>
    </section>
  );
};

export default Projects;