import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './components/Timeline';
import Projects from './pages/Projects';
import SnowTotoroBackground from './components/SnowTotoroBackground';
import knightImg from './assets/knight.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] dark:bg-portfolio-bg text-[#0F172A] dark:text-portfolio-text transition-colors duration-300 relative selection:bg-[#991B1B]/20 selection:text-[#991B1B]">
      {/* Fondo animado de partículas del Caballero y copos de nieve */}
      <SnowTotoroBackground />

      {/* Ilustración de fondo del Caballero Raging Wolf */}
      <div 
        aria-hidden="true" 
        className="fixed bottom-0 right-2 sm:right-6 lg:right-12 pointer-events-none z-0 select-none opacity-20 dark:opacity-25 max-w-[200px] sm:max-w-[280px] lg:max-w-[340px] transition-opacity duration-500"
      >
        <img 
          src={knightImg} 
          alt="Knight background" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />
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
