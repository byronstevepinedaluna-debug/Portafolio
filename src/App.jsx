import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './components/Timeline';
import Projects from './pages/Projects';
import SnowTotoroBackground from './components/SnowTotoroBackground';
import funkoImg from './assets/funko.png';

function App() {
  const [showFunkoMessage, setShowFunkoMessage] = useState(false);
  const [isFunkoBouncing, setIsFunkoBouncing] = useState(false);
  const funkoTimerRef = useRef(null);

  const handleFunkoClick = () => {
    // Animación de salto
    setIsFunkoBouncing(true);
    setTimeout(() => setIsFunkoBouncing(false), 350);

    // Mostrar el mensaje
    setShowFunkoMessage(true);

    // Ocultar mensaje después de 3.5 segundos
    if (funkoTimerRef.current) {
      clearTimeout(funkoTimerRef.current);
    }
    funkoTimerRef.current = setTimeout(() => {
      setShowFunkoMessage(false);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (funkoTimerRef.current) {
        clearTimeout(funkoTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] dark:bg-portfolio-bg text-[#0F172A] dark:text-portfolio-text transition-colors duration-300 relative selection:bg-[#991B1B]/20 selection:text-[#991B1B]">
      {/* Fondo animado de partículas de Duke y copos de nieve */}
      <SnowTotoroBackground />

      {/* Personaje Funko Pop interactivo en la derecha */}
      <div className="fixed bottom-0 right-2 sm:right-6 lg:right-10 z-30 select-none pointer-events-none">
        <div className="relative">
          {/* Bocadillo de diálogo "¡Hola Mundo!" */}
          {showFunkoMessage && (
            <div 
              role="status"
              aria-live="polite"
              className="absolute -top-12 sm:-top-14 right-2 sm:right-4 z-40 bg-white dark:bg-[#181C24] text-[#0F172A] dark:text-white px-4 py-2 rounded-2xl shadow-2xl border-2 border-[#991B1B] font-extrabold text-xs sm:text-sm whitespace-nowrap animate-bounce flex items-center gap-1.5 filter drop-shadow-lg"
            >
              <span>Hola Mundo</span>
              {/* Flecha apuntando al Funko */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-[#181C24] border-b-2 border-r-2 border-[#991B1B] rotate-45"></div>
            </div>
          )}

          {/* Botón interactivo del Funko Pop */}
          <button
            type="button"
            onClick={handleFunkoClick}
            title="¡Haz clic en mí!"
            aria-label="Funko Pop de Byron - Haz clic para decir Hola Mundo"
            className={`pointer-events-auto cursor-pointer block outline-none transition-transform duration-300 ${
              isFunkoBouncing ? '-translate-y-3 scale-105' : 'hover:scale-105 active:scale-95'
            } w-24 sm:w-36 lg:w-44 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]`}
          >
            <img 
              src={funkoImg} 
              alt="Funko Pop Character" 
              className="w-full h-auto object-contain pointer-events-none"
            />
          </button>
        </div>
      </div>

      {/* Iluminación ambiental sutil y sólida (sin degradados dobles) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-slate-400/10 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-[35%] left-0 w-[450px] h-[550px] bg-[#991B1B]/5 dark:bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-slate-400/10 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <Navbar />
      
      <main className="flex-grow z-10">
        <Home />
        <About />
        <Timeline />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
