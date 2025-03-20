import React, { useState } from 'react';
import { Laptop2, Smartphone, Home, Briefcase, Code, User, Mail, Github, Linkedin, Twitter, Menu } from 'lucide-react';

const sections = [
  { 
    id: 'home', 
    title: 'Home', 
    icon: Home, 
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    content: {
      title: "Hi, I'm Miloš",
      subtitle: "Full Stack Developer",
      description: "Passionate about creating web applications with modern technologies. Specializing in React, Node.js and cloud solutions."
    }
  },
  { 
    id: 'work', 
    title: 'My Work', 
    icon: Briefcase,
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
    content: {
      title: "My Projects",
      subtitle: "Recent Work",
      description: "Explore my latest projects and applications built with modern tech stacks.",
      projects: [
        { name: "E-Commerce Platform", tech: "React, Node.js, MongoDB" },
        { name: "Social Media Dashboard", tech: "Next.js, Firebase" },
        { name: "AI-Powered Analytics", tech: "Python, TensorFlow" }
      ]
    }
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    icon: Code,
    bgImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2070',
    content: {
      title: "Technical Skills",
      subtitle: "My Expertise",
      skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Python", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "AWS", "CI/CD"] }
      ]
    }
  },
  { 
    id: 'about', 
    title: 'About', 
    icon: User,
    bgImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2026',
    content: {
      title: "About Me",
      subtitle: "My Journey",
      description: "With over 5 years of experience in full-stack development, I've worked on various projects from startups to enterprise solutions.",
      highlights: [
        "🎓 Computer Science Graduate",
        "💼 5+ Years Experience",
        "🌟 Open Source Contributor"
      ]
    }
  },
  { 
    id: 'contact', 
    title: 'Contact', 
    icon: Mail,
    bgImage: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2071',
    content: {
      title: "Get in Touch",
      subtitle: "Let's Connect",
      email: "contact@milosmajkic.dev",
      social: [
        { icon: Github, link: "github.com/milosmajkic" },
        { icon: Linkedin, link: "linkedin.com/in/milosmajkic" },
        { icon: Twitter, link: "twitter.com/milosmajkic" }
      ]
    }
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderLaptopContent = (section: typeof sections[0]) => {
    switch (section.id) {
      case 'home':
        return (
          <>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-blue-400">{section.content.title}</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-3 md:mb-4">{section.content.subtitle}</p>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8">{section.content.description}</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base">
                View Projects
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors text-sm md:text-base">
                Contact Me
              </button>
            </div>
          </>
        );
      case 'work':
        return (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-400">{section.content.title}</h2>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6">{section.content.description}</p>
            <div className="grid gap-4">
              {section.content.projects.map((project, index) => (
                <div key={index} className="p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-base md:text-lg font-semibold text-blue-400">{project.name}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{project.tech}</p>
                </div>
              ))}
            </div>
          </>
        );
      case 'skills':
        return (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-400">{section.content.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {section.content.skills.map((skillGroup, index) => (
                <div key={index} className="p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2 md:mb-3">{skillGroup.category}</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="text-sm md:text-base text-gray-300">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        );
      case 'about':
        return (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-400">{section.content.title}</h2>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6">{section.content.description}</p>
            <div className="space-y-2 md:space-y-3">
              {section.content.highlights.map((highlight, index) => (
                <p key={index} className="text-sm md:text-lg text-gray-400">{highlight}</p>
              ))}
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-400">{section.content.title}</h2>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6">{section.content.subtitle}</p>
            <p className="text-base md:text-lg text-blue-400 mb-4 md:mb-6">{section.content.email}</p>
            <div className="flex space-x-4 md:space-x-6">
              {section.content.social.map((platform, index) => (
                <a
                  key={index}
                  href={`https://${platform.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <platform.icon size={20} className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-blue-400">Miloš Majkić | Portfolio</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}
              >
                <section.icon size={18} />
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 border-b border-blue-500/20`}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === section.id ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}
              >
                <section.icon size={20} />
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="w-screen min-h-screen flex-shrink-0 snap-center relative pt-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${section.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 py-8 md:py-12 h-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full gap-8 md:gap-12">
                {/* Laptop Display */}
                <div className="relative w-full lg:w-[600px] h-[300px] md:h-[400px] perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg border border-blue-500/30 backdrop-blur-sm transform rotate-y-10 shadow-2xl">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black/40 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4 md:p-8 pt-8 md:pt-12">
                      {renderLaptopContent(sections.find(s => s.id === activeSection) || sections[0])}
                    </div>
                  </div>
                </div>

                {/* Phone Display */}
                <div className="relative w-[200px] md:w-[300px] h-[400px] md:h-[600px] mx-auto lg:mx-0 lg:mr-12 mt-8 lg:mt-0">
                  <div className="absolute inset-0 bg-white/5 rounded-[40px] border-4 border-gray-700 backdrop-blur-sm overflow-hidden">
                    <div className="w-20 md:w-32 h-4 md:h-6 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl" />
                    <div className="p-4 h-full">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-xs md:text-sm mb-4 md:mb-6 mt-2 px-2">
                        <span>{time}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 md:w-4 h-3 md:h-4 rounded-full border-2 border-current flex items-center justify-center">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-current rounded-full"></div>
                          </div>
                          <div className="w-3 md:w-4 h-3 md:h-4">
                            <div className="w-full h-1.5 md:h-2 bg-current rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Menu */}
                      <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-8">
                        {sections.map((navSection) => (
                          <button
                            key={navSection.id}
                            onClick={() => handleSectionChange(navSection.id)}
                            className={`flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 rounded-xl transition-all ${
                              activeSection === navSection.id
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'hover:bg-blue-500/10'
                            }`}
                          >
                            <navSection.icon size={16} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base">{navSection.title}</span>
                          </button>
                        ))}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 md:bottom-8 left-4 right-4">
                        <div className="bg-white/5 rounded-2xl p-3 md:p-4">
                          <h3 className="text-xs md:text-sm font-medium mb-2 md:mb-3">Quick Links</h3>
                          <div className="flex justify-around">
                            <a href="#" className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
                              <Github size={16} className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
                              <Linkedin size={16} className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
                              <Twitter size={16} className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;