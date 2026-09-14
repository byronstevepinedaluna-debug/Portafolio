import { useState } from 'react';
import { FiExternalLink as ExternalLink, FiGithub as Github, FiBookOpen as BookOpen, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiVite, SiMongodb, SiPostgresql, 
  SiDocker, SiHtml5, SiTailwindcss
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

const getTechIcon = (tech) => {
  const t = tech.toLowerCase().trim();
  if (t === 'javascript') return { icon: SiJavascript, color: 'text-[#F7DF1E]' };
  if (t === 'react' || t === 'react native') return { icon: SiReact, color: 'text-[#61DAFB]' };
  if (t === 'node.js') return { icon: SiNodedotjs, color: 'text-[#339933]' };
  if (t === 'vite') return { icon: SiVite, color: 'text-[#646CFF]' };
  if (t === 'mongodb') return { icon: SiMongodb, color: 'text-[#47A248]' };
  if (t === 'postgresql') return { icon: SiPostgresql, color: 'text-[#4169E1]' };
  if (t === 'docker') return { icon: SiDocker, color: 'text-[#2496ED]' };
  if (t === 'java' || t === 'javafx') return { icon: FaJava, color: 'text-[#E76F00]' };
  if (t === 'sql') return { icon: TbSql, color: 'text-[#00758F]' };
  if (t === 'html5' || t === 'html') return { icon: SiHtml5, color: 'text-[#E34F26]' };
  if (t === 'css3' || t === 'css') return { icon: FaCss3Alt, color: 'text-[#1572B6]' };
  if (t === 'tailwindcss') return { icon: SiTailwindcss, color: 'text-[#06B6D4]' };
  return null;
};

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, learnedSkills, image, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the array of images if provided, otherwise fallback to the single image, or an empty array
  const galleryImages = images && images.length > 0 ? images : (image ? [image] : []);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-white/75 dark:bg-portfolio-surface/70 backdrop-blur-md rounded-2xl border border-[#F0DEE3] dark:border-portfolio-surface/80 shadow-xl overflow-hidden hover:shadow-2xl hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-500 flex flex-col h-full relative group/card">
      {/* Decorative top gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-rose-500 to-secondary"></div>

      {/* Imagen del proyecto (Carrusel integrado) */}
      <div className="h-56 w-full bg-slate-100 dark:bg-portfolio-bg relative overflow-hidden">
        {galleryImages.length > 0 ? (
          <>
            <img 
              src={galleryImages[currentImageIndex]} 
              alt={`Captura de ${title} - Imagen ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
            
            {/* Dark overlay that fades on hover */}
            <div className="absolute inset-0 bg-portfolio-bg/10 group-hover/card:bg-transparent transition-colors duration-500"></div>

            {/* Controles del Carrusel (solo si hay más de 1 imagen) */}
            {galleryImages.length > 1 && (
              <>
                {/* Flecha Izquierda */}
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full p-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Flecha Derecha */}
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full p-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>

                {/* Indicadores (Puntos) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-slate-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-white w-3.5' : 'bg-white/50 hover:bg-white/80 w-1.5'
                      }`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
            <span className="text-sm font-medium text-center px-4">foto no disponible</span>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#1A111E] dark:text-white mb-2 group-hover/card:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-[#6B556E] dark:text-slate-300 mb-5 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Habilidades Aprendidas */}
          {learnedSkills && (
            <div className="mb-5 bg-primary/5 dark:bg-portfolio-bg/30 p-4 rounded-xl border border-primary/15 dark:border-portfolio-surface/50">
              <div className="flex items-center text-primary dark:text-secondary mb-1.5">
                <BookOpen className="w-4 h-4 mr-1.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Habilidades Aprendidas</span>
              </div>
              <p className="text-xs text-[#6B556E] dark:text-slate-300 leading-relaxed">
                {learnedSkills}
              </p>
            </div>
          )}
        </div>

        <div>
          {/* Technologies badge container */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, index) => {
              const techInfo = getTechIcon(tech);
              const Icon = techInfo?.icon;
              return (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF5F6] text-[#6B556E] dark:bg-portfolio-surface dark:text-slate-300 border border-[#F0DEE3] dark:border-portfolio-surface/40 hover:scale-105 transition-transform duration-200"
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${techInfo.color}`} />}
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Links Footer */}
          <div className="pt-4 border-t border-[#F0DEE3] dark:border-portfolio-surface/80 flex flex-wrap gap-4 items-center">
            {githubLink && !Array.isArray(githubLink) && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-[#6B556E] hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors"
              >
                <Github className="w-4.5 h-4.5 mr-1.5" />
                Repositorio
              </a>
            )}
            {githubLink && Array.isArray(githubLink) && githubLink.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-[#6B556E] hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors"
              >
                <Github className="w-4.5 h-4.5 mr-1.5" />
                {link.label}
              </a>
            ))}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-[#6B556E] hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors"
              >
                <ExternalLink className="w-4.5 h-4.5 mr-1.5" />
                Ver Proyecto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

