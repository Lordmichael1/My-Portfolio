import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedHello, setDisplayedHello] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [displayedRole, setDisplayedRole] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [currentStage, setCurrentStage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [isReversing, setIsReversing] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);
  
  const texts = [
    "Hello, I'm",
    "Michael Godwin",
    "Creative Technologist | Frontend developer | Graphic designer"
  ];
  
  const typingSpeed = 60; // milliseconds per character
  const stageDelay = 300; // delay between stages
  const cursorBlinkSpeed = 500;
  const pauseDuration = 20000; // 20 seconds pause
  const maxCycles = 1; // run just one complete cycle

  // Reset animation when page becomes visible or scrolls into view
  const resetAnimation = () => {
    setDisplayedHello('');
    setDisplayedName('');
    setDisplayedRole('');
    setDisplayedDescription('');
    setCurrentStage(0);
    setCurrentIndex(0);
    setShowButtons(false);
    setIsReversing(false);
    setCycleCount(0);
    setAnimationComplete(false);
  };

  // Page visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;
      setIsPageVisible(isVisible);
      
      if (isVisible && isInView) {
        // Reset and restart animation when page becomes visible and hero is in view
        resetAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView]);

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView && isPageVisible) {
          // Reset and restart animation when scrolled into view
          resetAnimation();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the hero section is visible
        rootMargin: '-50px 0px' // Add some margin for better UX
      }
    );

    const heroElement = document.getElementById('home');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, [isPageVisible]);

  // Typewriter effect for multiple stages
  useEffect(() => {
    if (animationComplete || !isPageVisible) return;

    if (!isReversing) {
      // Forward typing
      if (currentStage < texts.length) {
        const currentText = texts[currentStage];
        
        if (currentIndex < currentText.length) {
          const timeout = setTimeout(() => {
            const char = currentText[currentIndex];
            
            // Update the appropriate state based on current stage
            if (currentStage === 0) {
              setDisplayedHello(prev => prev + char);
            } else if (currentStage === 1) {
              setDisplayedName(prev => prev + char);
            } else if (currentStage === 2) {
              setDisplayedRole(prev => prev + char);
            }
            
            setCurrentIndex(prev => prev + 1);
          }, typingSpeed);

          return () => clearTimeout(timeout);
        } else {
          // Move to next stage after a delay
          const timeout = setTimeout(() => {
            setCurrentStage(prev => prev + 1);
            setCurrentIndex(0);
            
            // Show buttons and description after role is typed
            if (currentStage === texts.length - 1) {
              setShowButtons(true);
              setDisplayedDescription("I craft beautiful, functional web experiences that bridge the gap between design and technology. Passionate about creating solutions that make a difference.");
              
              // After 1 cycle, stop the animation but keep content displayed
              if (cycleCount >= maxCycles - 1) {
                setAnimationComplete(true);
                return;
              }
              
              // Start 20-second pause before reversing
              setTimeout(() => {
                if (isPageVisible) {
                  setIsReversing(true);
                  setCurrentStage(texts.length - 1);
                  setCurrentIndex(texts[texts.length - 1].length);
                }
              }, pauseDuration);
            }
          }, stageDelay);

          return () => clearTimeout(timeout);
        }
      }
    } else {
      // Reverse typing
      if (currentStage >= 0) {
        const currentText = texts[currentStage];
        
        if (currentIndex > 0) {
          const timeout = setTimeout(() => {
            // Update the appropriate state based on current stage
            if (currentStage === 0) {
              setDisplayedHello(prev => prev.slice(0, -1));
            } else if (currentStage === 1) {
              setDisplayedName(prev => prev.slice(0, -1));
            } else if (currentStage === 2) {
              setDisplayedRole(prev => prev.slice(0, -1));
            }
            
            setCurrentIndex(prev => prev - 1);
          }, typingSpeed / 2); // Reverse faster

          return () => clearTimeout(timeout);
        } else {
          // Move to previous stage
          const timeout = setTimeout(() => {
            if (currentStage > 0) {
              setCurrentStage(prev => prev - 1);
              setCurrentIndex(texts[currentStage - 1].length);
            } else {
              // Completed one full cycle, start over
              setCycleCount(prev => prev + 1);
              setIsReversing(false);
              setCurrentStage(0);
              setCurrentIndex(0);
              setShowButtons(false);
              setDisplayedDescription('');
            }
          }, stageDelay);

          return () => clearTimeout(timeout);
        }
      }
    }
  }, [currentIndex, currentStage, texts, isReversing, cycleCount, animationComplete, isPageVisible]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, []);

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
                src="https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751319713/IMG-20250202-WA0028_orrcot.jpg"
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
              <p className="text-lg text-gray-600 font-medium">
                {displayedHello}
                {currentStage === 0 && (
                  <span 
                    className={`inline-block w-0.5 h-5 bg-gray-600 ml-1 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  />
                )}
              </p>
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
                {displayedName}
                {currentStage === 1 && (
                  <span 
                    className={`inline-block w-1 h-8 md:h-14 bg-gray-900 ml-1 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  />
                )}
              </h1>
              <h2 className="text-base sm:text-lg md:text-2xl text-blue-600 font-semibold">
                {displayedRole}
                {animationComplete && (
                  <span 
                    className={`inline-block w-0.5 h-4 md:h-6 bg-blue-600 ml-1 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  />
                )}
                {(currentStage === 2 || (currentStage === texts.length && !isReversing)) && !animationComplete && (
                  <span 
                    className={`inline-block w-0.5 h-4 md:h-6 bg-blue-600 ml-1 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  />
                )}
              </h2>
            </div>

            <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-300 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {displayedDescription}
            </p>

            {/* CTA Buttons */}
            <div className={`btns flex flex-row sm:flex-row gap-4 justify-center items-center mt-8 transition-all duration-300 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
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