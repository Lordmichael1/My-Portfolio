import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 95 },
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 50 },
        { name: 'Next.js', level: 40 },
        { name: 'Tailwind CSS', level: 62 },
        { name: 'Vue.js', level: 55 },
      ]
    },
    {
      title: 'Graphic Design',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'PixelLab', level: 98 },
        { name: 'CorelDraw', level: 90 },
        { name: 'Photoshop', level: 88 },
        { name: 'Canva', level: 95 },
        { name: 'PicsArt', level: 87 },
        { name: 'Snapseed', level: 97 },        
        { name: 'Pinterest', level: 82 },
      ]
    },
    {
      title: 'Tools & Others',
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Vercel', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'EmailJs', level: 82 },
        { name: 'Coolers.co', level: 82 },
        { name: 'Google font', level: 82 },
        { name: 'Dafont', level: 82 },
      ]
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'JavaScript', 'PixelLab', 'CorelDraw', 'PhotoShop', 'Vercel', 
    'Next.js', 'Vue.js', 'EmailJs', 'Tailwind CSS', 'Pinterest', 'AWS', 
    'Git', 'Figma', 'Coolors', 'React-Dom', 'Redux', 'Lucide'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 rounded-full font-medium hover:from-blue-100 hover:to-emerald-100 transition-all duration-300 cursor-default border border-gray-200 hover:border-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">TCA</span>
              </div>
              <h4 className="font-semibold text-gray-800">The Curve Africa</h4>
              <p className="text-gray-600 text-sm mt-2">6 month Software engineering course</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-l">Udemy</span>
              </div>
              <h4 className="font-semibold text-gray-800">Modern JS for beginners- a udemy course</h4>
              <p className="text-gray-600 text-sm mt-2">A complete JavaScript beginners guide</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">GD</span>
              </div>
              <h4 className="font-semibold text-gray-800"> Graphic design Courses</h4>
              <p className="text-gray-600 text-sm mt-2">Completed 6 graphics design courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;