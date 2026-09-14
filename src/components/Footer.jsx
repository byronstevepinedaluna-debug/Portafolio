import { FiGithub as Github, FiMail as Mail, FiLinkedin as Linkedin, FiBriefcase as Briefcase } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-[#0F1117]/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            <a 
              href="https://github.com/byronstevepinedaluna-debug" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white transition-colors hover:scale-110 duration-200"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/byron-steve-pineda-luna-481508358/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-[#991B1B] dark:text-slate-400 dark:hover:text-red-400 transition-colors hover:scale-110 duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="https://candidato.gt.computrabajo.com/candidate/home" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-[#991B1B] dark:text-slate-400 dark:hover:text-red-400 transition-colors hover:scale-110 duration-200" 
              title="CompuTrabajo"
            >
              <span className="sr-only">CompuTrabajo</span>
              <Briefcase className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="mailto:byronstevepinedaluna@gmail.com" 
              className="text-slate-500 hover:text-[#991B1B] dark:text-slate-400 dark:hover:text-red-400 transition-colors hover:scale-110 duration-200"
            >
              <span className="sr-only">Correo</span>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
