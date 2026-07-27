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

// BloodLink
import blood1 from '../assets/blolink/Captura de pantalla 2026-06-07 154123.png';
import blood2 from '../assets/blolink/Captura de pantalla 2026-06-07 154146.png';
import blood3 from '../assets/blolink/Captura de pantalla 2026-06-07 154201.png';
import blood4 from '../assets/blolink/Captura de pantalla 2026-06-07 154218.png';

// ExpoKinal
import expo1 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152723.png';
import expo2 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152739.png';
import expo3 from '../assets/Proyecto ExpoKinal/Captura de pantalla 2026-06-07 152814.png';

// SHOESKI
import shoes1 from '../assets/SHOESKI/Captura de pantalla 2026-06-07 152529.png';
import shoes2 from '../assets/SHOESKI/Captura de pantalla 2026-06-07 152554.png';
import shoes3 from '../assets/SHOESKI/Captura de pantalla 2026-06-07 152610.png';
import shoes4 from '../assets/SHOESKI/Foto1.png';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'KinalVR - Recorrido Virtual (En Desarrollo)',
      description: 'Recorrido interactivo de las instalaciones de Kinal en Realidad Virtual. Arquitectura dividida en cliente y servidor para manejar la lógica y los entornos 3D en la web.',
      technologies: ['JavaScript', 'React', 'Node.js', 'Vite'],
      learnedSkills: 'Integración de entornos 3D en la web con WebXR, manejo de estado complejo en React y desarrollo de un backend que soporta experiencias en tiempo real.',
      images: [kinalVr1, kinalVr2, kinalVr3, kinalVr4],
      githubLink: [
        { label: 'Frontend', url: 'https://github.com/KinalVR-Expo2026/KinalVR-Client' },
        { label: 'Backend', url: 'https://github.com/KinalVR-Expo2026/KinalVR-Server' }
      ],
      liveLink: 'https://kinalvr-client.onrender.com'
    },
    {
      title: 'GastroFlow',
      description: 'Sistema integral para la gestión de restaurantes. Optimiza el flujo de pedidos, control de mesas, inventario y facturación de manera eficiente.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
      learnedSkills: 'Diseño de arquitectura de microservicios, conexión concurrente a bases de datos relacionales y no relacionales, y gestión de estado global en el frontend.',
      images: [gastro1, gastro2, gastro3],
      githubLink: 'https://github.com/csican-2024328/GastroFlow',
      liveLink: 'https://gastroflow-frontend.onrender.com/',
    },
    {
      title: 'NexusBank',
      description: 'Simulador de sistema bancario con gestión de cuentas, transferencias, control de saldos y administración de perfiles de usuario de forma segura.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'],
      learnedSkills: 'Implementación de seguridad JWT, despliegue y orquestación básica con Docker, y control de transacciones seguras simulando entornos financieros.',
      images: [nexus1, nexus2, nexus3],
      githubLink: 'https://github.com/breyes396/Sistema-bancario-NexusBank',
      liveLink: 'https://sistema-bancario-nexusbank.onrender.com/',
    },
    {
      title: 'BloodLink',
      description: 'Plataforma para la gestión y conexión de donaciones de sangre. Facilita la comunicación entre donantes y personas que necesitan sangre de manera urgente mediante microservicios.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
      learnedSkills: 'Estructuración de un backend modular, desarrollo de APIs RESTful escalables y modelado de datos para sistemas de registro médico/donaciones.',
      images: [blood1, blood2, blood3, blood4],
      githubLink: 'https://github.com/ByronKinal/BloodLink',
      liveLink: 'https://bloodlink-web-pgq0.onrender.com/',
    },
    {
      title: 'Proyecto ExpoKinal',
      description: 'Proyecto especial desarrollado para la feria tecnológica Expo Kinal. Una aplicación de escritorio robusta orientada a la gestión de datos.',
      technologies: ['Java', 'JavaFX', 'SQL', 'CSS'],
      learnedSkills: 'Trabajo bajo presión para entregas de exposición, maquetación avanzada con CSS para JavaFX y consultas SQL complejas para reportería.',
      images: [expo1, expo2, expo3],
      githubLink: 'https://github.com/ByronKinal/ProyectoExpoKinal',
    },
    {
      title: 'SHOESKI',
      description: 'Tienda en línea especializada en calzado para toda la familia. Cuenta con catálogo completo, filtros de búsqueda, carrito de compras y un sistema de gestión para usuarios, proveedores y productos.',
      technologies: ['Java', 'HTML5', 'CSS3', 'SQL'],
      learnedSkills: 'Desarrollo de aplicaciones web orientadas a objetos con Java, integración de bases de datos relacionales, y maquetación web tradicional usando HTML y CSS puro para la interfaz de usuario.',
      images: [shoes1, shoes2, shoes3, shoes4],
      githubLink: 'https://github.com/ByronKinal/ProyectoB3PaginaWeb',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(600);
  const gap = 24; // gap-6 in pixels

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
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden bg-slate-100/30 dark:bg-portfolio-bg/20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Proyectos</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + projects.length) % projects.length;
              const isNext = index === (activeIndex + 1) % projects.length;

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
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-portfolio-surface/80 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-lg hover:bg-white dark:hover:bg-portfolio-surface hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-95 transition-all pointer-events-auto"
              aria-label="Proyecto anterior"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-portfolio-surface/80 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-lg hover:bg-white dark:hover:bg-portfolio-surface hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-95 transition-all pointer-events-auto"
              aria-label="Siguiente proyecto"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Indicators (Train Dots) */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-primary to-accent w-8' 
                  : 'bg-slate-300 dark:bg-portfolio-surface w-2.5 hover:bg-slate-400 dark:hover:bg-portfolio-surface'
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
