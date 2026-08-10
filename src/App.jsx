import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './components/Timeline';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-portfolio-bg text-slate-800 dark:text-portfolio-text transition-colors duration-300 relative">
      {/* Decorative Orbs in background of the entire app */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/5 to-secondary/5 dark:from-primary/2 dark:to-secondary/2 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-0 w-[400px] h-[600px] bg-gradient-to-tr from-secondary/5 to-primary/5 dark:from-secondary/2 dark:to-primary/2 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/2 dark:to-secondary/2 rounded-full blur-3xl pointer-events-none z-0"></div>

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

