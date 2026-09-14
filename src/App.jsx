import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './components/Timeline';
import Projects from './pages/Projects';
import SnowTotoroBackground from './components/SnowTotoroBackground';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F6] dark:bg-portfolio-bg text-[#1A111E] dark:text-portfolio-text transition-colors duration-300 relative selection:bg-primary/20 selection:text-primary">
      {/* Fondo animado de Totoro cayendo como copos de nieve en la paleta de Kurumi */}
      <SnowTotoroBackground />

      {/* Orbes decorativos de ambiente carmesí y ámbar astral */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-primary/10 to-secondary/10 dark:from-primary/15 dark:to-secondary/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-0 w-[450px] h-[650px] bg-gradient-to-tr from-secondary/10 to-primary/10 dark:from-secondary/10 dark:to-primary/15 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-0 w-[650px] h-[650px] bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/15 dark:to-secondary/10 rounded-full blur-3xl pointer-events-none z-0"></div>

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
