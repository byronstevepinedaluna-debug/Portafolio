import ProjectCard from '../components/ProjectCard';

// KinalVR
import kinalVr1 from '../assets/KinalVr/Captura de pantalla 2026-06-07 154516.png';
import kinalVr2 from '../assets/KinalVr/Captura de pantalla 2026-06-07 154546.png';
import kinalVr3 from '../assets/KinalVr/Captura de pantalla 2026-06-07 154551.png';
import kinalVr4 from '../assets/KinalVr/Captura de pantalla 2026-06-07 154605.png';

// GastroFlow
import gastro1 from '../assets/GastroFlow/Captura de pantalla 2026-06-07 153001.png';
import gastro2 from '../assets/GastroFlow/Captura de pantalla 2026-06-07 153044.png';
import gastro3 from '../assets/GastroFlow/Captura de pantalla 2026-06-07 153056.png';

// NexusBank
import nexus1 from '../assets/Nexusbank/Captura de pantalla 2026-06-07 153228.png';
import nexus2 from '../assets/Nexusbank/Captura de pantalla 2026-06-07 153259.png';
import nexus3 from '../assets/Nexusbank/Captura de pantalla 2026-06-07 153310.png';

// BloLink
import blolink1 from '../assets/blolink/Captura de pantalla 2026-06-07 154123.png';
import blolink2 from '../assets/blolink/Captura de pantalla 2026-06-07 154146.png';
import blolink3 from '../assets/blolink/Captura de pantalla 2026-06-07 154201.png';
import blolink4 from '../assets/blolink/Captura de pantalla 2026-06-07 154218.png';

// ExpoKinal
import expo1 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152723.png';
import expo2 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152739.png';
import expo3 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152814.png';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const staticProjects = [
  {
    title: 'KinalVR - Recorrido Virtual (En Desarrollo)',
    description: 'Recorrido interactivo de las instalaciones de Kinal en Realidad Virtual. Arquitectura dividida en cliente y servidor para manejar la lógica y los entornos 3D en la web.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Vite'],
    learnedSkills: 'Integración de entornos 3D en la web con WebXR, manejo de estado complejo en React y desarrollo de un backend que soporta experiencias en tiempo real.',
    images: [kinalVr1, kinalVr2, kinalVr3, kinalVr4],
    githubLink: [
      { label: 'Frontend', url: 'https://github.com/byronstevepinedaluna-debug/KinalVR-Client' },
      { label: 'Backend', url: 'https://github.com/byronstevepinedaluna-debug/KinalVR-Server' }
    ],
    liveLink: 'https://kinalvr-client.onrender.com'
  },
  {
    title: 'GastroFlow - Sistema para Restaurantes',
    description: 'Solución integral para gestión de comandas, menú interactivo y administración de inventario en tiempo real. Desarrollado con altos estándares de rendimiento y buenas prácticas.',
    technologies: ['Node.js', 'Express', 'React', 'MongoDB'],
    learnedSkills: 'Diseño de APIs REST escalables, modelado de esquemas NoSQL eficientes y sincronización de estados para pedidos en tiempo real.',
    images: [gastro1, gastro2, gastro3],
    githubLink: 'https://github.com/byronstevepinedaluna-debug/GastroFlow',
    liveLink: 'https://gastroflow.onrender.com'
  },
  {
    title: 'NexusBank - Banca Virtual',
    description: 'Plataforma bancaria digital completa que permite transferencias seguras, visualización de historial de transacciones y autenticación robusta para usuarios.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    learnedSkills: 'Implementación de seguridad financiera con JWT, transacciones ACID en bases de datos relacionales y diseño de interfaces con enfoque en la confianza del usuario.',
    images: [nexus1, nexus2, nexus3],
    githubLink: 'https://github.com/byronstevepinedaluna-debug/Nexusbank',
  },
  {
    title: 'BloLink - Plataforma de Enlaces',
    description: 'Herramienta moderna que centraliza todos tus enlaces de redes sociales y portafolios en una sola página personalizable y optimizada para dispositivos móviles.',
    technologies: ['React', 'TailwindCSS', 'Vite'],
    learnedSkills: 'Optimización extrema de bundle para carga instantánea, diseño Mobile-First y arquitectura de componentes reutilizables.',
    images: [blolink1, blolink2, blolink3, blolink4],
    githubLink: 'https://github.com/byronstevepinedaluna-debug/Blolink',
  },
  {
    title: 'Proyecto ExpoKinal',
    description: 'Proyecto especial desarrollado para la feria tecnológica Expo Kinal. Una aplicación de escritorio robusta orientada a la gestión de datos.',
    technologies: ['Java', 'JavaFX', 'SQL', 'CSS'],
    learnedSkills: 'Trabajo bajo presión para entregas de exposición, maquetación avanzada con CSS para JavaFX y consultas SQL complejas para reportería.',
    images: [expo1, expo2, expo3],
    githubLink: 'https://github.com/byronstevepinedaluna-debug/ProyectoExpoKinal',
  }
];

const Projects = () => {
  const [projectList, setProjectList] = useState(staticProjects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(600);
  const gap = 24; // gap-6 in pixels

  useEffect(() => {
    const getRepoNameFromUrl = (url) => {
      if (!url) return '';
      const cleanUrl = url.replace(/\/+$/, '');
      const parts = cleanUrl.split('/');
      return parts[parts.length - 1].toLowerCase().trim();
    };

    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/byronstevepinedaluna-debug/repos');
        if (!response.ok) {
          throw new Error('Error al obtener los repositorios de GitHub');
        }
        const data = await response.json();
        
        // Map the fetched repos to match the Project schema
        const githubProjects = data.map(repo => ({
          title: repo.name,
          description: repo.description || 'Repositorio público de GitHub. Sin descripción disponible.',
          technologies: repo.language ? [repo.language] : ['JavaScript'],
          learnedSkills: 'Desarrollo del proyecto utilizando tecnologías modernas y control de versiones en GitHub.',
          images: [], // No static screenshots available
          githubLink: repo.html_url,
          liveLink: repo.homepage || ''
        }));

        // Filter out duplicate repositories from the API response based on repo name
        const filteredGithubProjects = githubProjects.filter(newProj => {
          const newRepoName = getRepoNameFromUrl(newProj.githubLink);
          if (!newRepoName) return true;

          // Exclude profile-specific configuration repo and the portfolio repo itself
          if (newRepoName === 'byronstevepinedaluna-debug' || newRepoName === 'portafolio') return false;

          const isDuplicate = staticProjects.some(staticProj => {
            if (Array.isArray(staticProj.githubLink)) {
              return staticProj.githubLink.some(link => 
                getRepoNameFromUrl(link.url) === newRepoName
              );
            }
            if (typeof staticProj.githubLink === 'string') {
              return getRepoNameFromUrl(staticProj.githubLink) === newRepoName;
            }
            return false;
          });
          return !isDuplicate;
        });

        // Append the new projects from GitHub API to the existing list
        setProjectList([...staticProjects, ...filteredGithubProjects]);
      } catch (error) {
        console.error('Error fetching github repos:', error);
      }
    };

    fetchGithubRepos();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth * 0.85); // 85% width on mobile
      } else if (window.innerWidth < 1024) {
        setCardWidth(500); // 500px on tablets
      } else {
        setCardWidth(600); // 600px on desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projectList.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
  };

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden bg-[#FAF5F6]/40 dark:bg-portfolio-bg/20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A111E] dark:text-white">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-secondary">Proyectos</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B556E] dark:text-slate-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes. Explora la "vía de proyectos" y desplázate horizontalmente para verlos uno por uno.
          </p>
        </div>

        {/* Train Slider Window */}
        <div className="relative w-full overflow-hidden py-10">
          
          {/* Main Horizontal Track */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - ${cardWidth / 2}px - ${activeIndex * (cardWidth + gap)}px))`
            }}
          >
            {projectList.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!isActive) setActiveIndex(index);
                  }}
                  className={`flex-shrink-0 transition-all duration-500 ease-out ${
                    isActive 
                      ? 'scale-100 opacity-100 cursor-default z-20' 
                      : 'scale-90 opacity-40 hover:opacity-75 cursor-pointer z-10'
                  }`}
                  style={{ 
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-12 z-30">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-portfolio-surface/80 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 flex items-center justify-center text-[#1A111E] dark:text-slate-200 shadow-lg hover:bg-white dark:hover:bg-portfolio-surface hover:text-primary dark:hover:text-secondary hover:border-primary/40 hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-portfolio-surface/80 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 flex items-center justify-center text-[#1A111E] dark:text-slate-200 shadow-lg hover:bg-white dark:hover:bg-portfolio-surface hover:text-primary dark:hover:text-secondary hover:border-primary/40 hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer"
              aria-label="Siguiente proyecto"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Indicators (Train Dots) */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-primary to-secondary w-8 shadow-sm shadow-primary/30' 
                  : 'bg-[#E0CCD2] dark:bg-portfolio-surface w-2.5 hover:bg-primary/40 dark:hover:bg-portfolio-surface/80'
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
