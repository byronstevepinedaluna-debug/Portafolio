import { FiMenu as Menu, FiX as X, FiGithub as Github, FiLinkedin as Linkedin, FiSun as Sun, FiMoon as Moon, FiBriefcase as Briefcase } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'trayectoria', 'proyectos'];
      const scrollPosition = window.scrollY + 120; // threshold offset

      // Special case: if scrolled near the bottom, set active to the last section (proyectos)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('proyectos');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger scroll spy on mount to set initial section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', sectionId: 'inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi', sectionId: 'sobre-mi' },
    { name: 'Trayectoria', href: '#trayectoria', sectionId: 'trayectoria' },
    { name: 'Proyectos', href: '#proyectos', sectionId: 'proyectos' },
  ];

  return (
    <nav className="bg-white/80 dark:bg-portfolio-bg/80 backdrop-blur-md border-b border-slate-200/50 dark:border-portfolio-surface/50 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="text-xl font-bold text-slate-800 dark:text-white flex items-center hover:scale-105 transition-transform duration-300">
              Byron<span className="text-primary">Steve</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                      isActive
                        ? 'text-primary dark:text-accent bg-slate-100/50 dark:bg-portfolio-surface/50'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50/50 dark:hover:bg-portfolio-surface/20'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-portfolio-surface/80 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="w-px h-6 bg-slate-200 dark:bg-portfolio-surface"></div>
            <a href="https://github.com/byronstevepinedaluna-debug" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-850 dark:text-slate-400 dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/byron-steve-pineda-luna-481508358/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://candidato.gt.computrabajo.com/candidate/home" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors" title="CompuTrabajo">
              <Briefcase size={18} />
            </a>
          </div>
 
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-portfolio-surface/80 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-portfolio-surface focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-portfolio-surface/50" id="mobile-menu">
          <div className="px-3 pt-2 pb-4 space-y-1 bg-white dark:bg-portfolio-bg shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-350 dark:hover:bg-portfolio-surface/40 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex justify-center space-x-6 px-3 py-4 border-t border-portfolio-surface dark:border-portfolio-surface mt-3">
               <a href="https://github.com/byronstevepinedaluna-debug" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-850 dark:text-slate-400 dark:hover:text-white">
                <Github size={22} />
              </a>
               <a href="https://www.linkedin.com/in/byron-steve-pineda-luna-481508358/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
