import { useState } from 'react';
import { FiArrowRight as ArrowRight, FiCode as Code, FiDatabase as Database, FiLayout as Layout, FiChevronDown } from 'react-icons/fi';
import profilePic from '../assets/Perfil.jpeg';
import CvDownloadModal from '../components/CvDownloadModal';

const Home = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-16 md:py-24 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-4xl mx-auto text-center px-4 relative z-10">
        
        {/* Profile Pic with Glowing Border */}
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Pulsing glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Border frame */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-r from-primary to-accent">
              <img
                src={profilePic}
                alt="Byron Pineda"
                className="w-full h-full rounded-full object-cover border-4 border-slate-50 dark:border-slate-900 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-portfolio-text tracking-tight mb-6">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-muted to-portfolio-accent">Byron Pineda</span>
        </h1>
        
        {/* Tagline & Dedication */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-350 font-medium italic font-serif">
            "Si puedes imaginarlo, puedes programarlo"
          </p>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-slate-400 dark:text-slate-550 font-semibold tracking-wider uppercase">
            <span>En memoria de Alejandro Taboada Sánchez</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>1997 - 2019</span>
            <span className="inline-block text-xs">🎗️</span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
          Full Stack Developer & Estudiante en <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="font-semibold text-portfolio-muted hover:text-indigo-500 dark:text-portfolio-accent dark:hover:text-portfolio-muted transition-colors underline decoration-dotted">Kinal</a>. Me apasiona crear aplicaciones web modernas, eficientes y con experiencias de usuario atractivas.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            type="button"
            onClick={() => setIsCvModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-portfolio-muted to-portfolio-accent hover:from-portfolio-accent hover:to-portfolio-muted shadow-lg shadow-portfolio-muted/20 dark:shadow-portfolio-muted/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Descargar CV
          </button>
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 dark:border-portfolio-surface text-base font-bold rounded-2xl text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-portfolio-surface/40 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-portfolio-surface hover:scale-105 active:scale-95 transition-all"
          >
            Ver mis Proyectos
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Modal de Descarga Protegida */}
        <CvDownloadModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />
      </div>

      {/* Feature Highlights Section */}
      <div className="w-full max-w-5xl mx-auto mt-20 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="flex flex-col items-center text-center p-8 bg-white/50 dark:bg-portfolio-surface/40 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-portfolio-muted/30 dark:hover:border-portfolio-muted/30 transition-all duration-300 group">
            <div className="p-4 bg-portfolio-muted/10 rounded-2xl mb-5 text-portfolio-muted group-hover:scale-110 transition-transform duration-350">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-portfolio-text mb-3">Desarrollo Frontend</h3>
            <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
              Creación de interfaces interactivas y responsivas usando React, JavaScript y TailwindCSS con animaciones fluidas.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white/50 dark:bg-portfolio-surface/40 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-portfolio-accent/30 dark:hover:border-portfolio-accent/30 transition-all duration-300 group">
            <div className="p-4 bg-portfolio-accent/10 rounded-2xl mb-5 text-portfolio-accent group-hover:scale-110 transition-transform duration-350">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-portfolio-text mb-3">Desarrollo Backend</h3>
            <p className="text-slate-555 dark:text-slate-400 text-sm leading-relaxed">
              Diseño de APIs robustas, seguridad JWT y gestión de bases de datos con Node.js, Express, MongoDB y PostgreSQL.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white/50 dark:bg-portfolio-surface/40 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-portfolio-accent/30 dark:hover:border-portfolio-accent/30 transition-all duration-300 group">
            <div className="p-4 bg-portfolio-accent/10 rounded-2xl mb-5 text-portfolio-accent group-hover:scale-110 transition-transform duration-350">
              <Layout className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-portfolio-text mb-3">Diseño Moderno</h3>
            <p className="text-slate-555 dark:text-slate-400 text-sm leading-relaxed">
              Enfoque riguroso en la experiencia de usuario (UX), micro-interacciones pulidas y layouts totalmente responsivos.
            </p>
          </div>
          
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 animate-bounce-slow pointer-events-none hidden lg:flex">
        <span className="text-[10px] font-bold tracking-widest uppercase">Deslizar</span>
        <FiChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default Home;
