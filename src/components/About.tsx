import React from 'react';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Happy Clients' },
    { number: '98.9%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality graphic designs',
      description: 'Delivering quality designs that drive increase in brand awareness.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly learning and implementing cutting-edge technologies.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Delivering solutions that drive real business value and impact.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Passionate Developer/ Designer with a Vision
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Michael Godwin - a frontend developer, and graphic designer with a mission to create meaningful digital
                experience that empower others. My journey began with a 
                fascination for how technology can solve real-world problems.
              </p>
              <p>
                I believe that great software is born from the intersection of technical excellence 
                and human-centered design. Whether it's crafting clean interfaces, designing standout visuals, or building 
                platforms with purpose, I'm driven by the desire to create solutions 
                that make a meaningful impact.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies, software, 
                and designs, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="pt-6">
              <a 
                href="../../Public/Michael Godwin's Resume.pdf" 
                download 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
              Download Resume
              </a>
            </div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="font-bold text-2xl">3+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div> */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;