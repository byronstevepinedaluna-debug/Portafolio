import { useState } from 'react';
import { FiArrowRight as ArrowRight, FiCode as Code, FiDatabase as Database, FiLayout as Layout, FiChevronDown } from 'react-icons/fi';
import profilePic from '../assets/Perfil.jpeg';
import CvDownloadModal from '../components/CvDownloadModal';

const Home = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-16 md:py-24 overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-slate-400/10 dark:bg-slate-800/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#991B1B]/5 dark:bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-4xl mx-auto text-center px-4 relative z-10">
        
        {/* Profile Pic with Solid Armor Frame */}
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Subtle solid halo */}
            <div className="absolute -inset-1 bg-[#991B1B]/30 dark:bg-red-600/30 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Solid border frame */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-[#991B1B] dark:bg-red-700 shadow-2xl">
              <img
                src={profilePic}
                alt="Byron Pineda"
                className="w-full h-full rounded-full object-cover border-4 border-[#F4F6F8] dark:border-[#181C24] shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Name and Title - Clean Solid Color */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#0F172A] dark:text-portfolio-text tracking-tight mb-6">
          Hola, soy <span className="text-[#991B1B] dark:text-red-500">Byron Pineda</span>
        </h1>
        
        {/* Tagline & Dedication */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium italic font-serif">
            "Si puedes imaginarlo, puedes programarlo"
          </p>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase">
            <span>En memoria de Alejandro Taboada Sánchez</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>1997 - 2019</span>
            <span className="inline-block text-xs">🎗️</span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Full Stack Developer & Estudiante en <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#991B1B] dark:text-red-400 hover:underline transition-colors decoration-dotted">Kinal</a>. Me apasiona crear aplicaciones web modernas, eficientes y con experiencias de usuario atractivas.
        </p>

        {/* Call to Actions - Botones con Un Solo Color Sólido */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            type="button"
            onClick={() => setIsCvModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-2xl text-white bg-[#991B1B] hover:bg-[#7F1D1D] shadow-lg shadow-red-950/20 dark:shadow-red-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Descargar CV
          </button>
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-base font-bold rounded-2xl text-[#0F172A] dark:text-slate-200 bg-white dark:bg-[#181C24] hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
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

      {/* Feature Highlights Section - Tarjetas Limpias con Iconos Sólidos */}
      <div className="w-full max-w-5xl mx-auto mt-20 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-[#991B1B]/50 dark:hover:border-red-600/50 transition-all duration-300 group">
            <div className="p-4 bg-red-50 dark:bg-red-950/40 rounded-2xl mb-5 text-[#991B1B] dark:text-red-400 group-hover:scale-110 transition-transform duration-350">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-portfolio-text mb-3">Desarrollo Frontend</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Creación de interfaces interactivas y responsivas usando React, JavaScript y TailwindCSS con animaciones fluidas.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-5 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-350">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-portfolio-text mb-3">Desarrollo Backend</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Diseño de APIs robustas, seguridad JWT y gestión de bases de datos con Node.js, Express, MongoDB y PostgreSQL.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-5 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-350">
              <Layout className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-portfolio-text mb-3">Diseño Moderno</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Enfoque riguroso en la experiencia de usuario (UX), micro-interacciones pulidas y layouts totalmente responsivos.
            </p>
          </div>
          
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 animate-bounce-slow pointer-events-none hidden lg:flex">
        <span className="text-[10px] font-bold tracking-widest uppercase">Deslizar</span>
        <FiChevronDown className="w-5 h-5 text-[#991B1B] dark:text-red-400" />
      </div>
    </section>
  );
};

export default Home;
