import { 
  FiMail, 
  FiPhone, 
  FiCalendar, 
  FiBookOpen, 
  FiUser, 
  FiBriefcase,
  FiShield,
  FiClock,
  FiUsers,
  FiCpu,
  FiZap,
  FiHeart
} from 'react-icons/fi';
import { 
  SiJavascript, 
  SiHtml5, 
  SiReact, 
  SiTailwindcss, 
  SiVite, 
  SiThreedotjs, 
  SiNodedotjs, 
  SiJsonwebtokens, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit, 
  SiPostman, 
  SiTrello, 
  SiCisco 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

const About = () => {
  const lenguajes = [
    { name: "Java", percentage: 100, color: "from-blue-500 to-indigo-600", icon: FaJava, iconColor: "text-[#E76F00]" },
    { name: "SQL", percentage: 95, color: "from-purple-500 to-pink-600", icon: TbSql, iconColor: "text-[#00758F]" },
    { name: "JavaScript", percentage: 80, color: "from-amber-400 to-orange-500", icon: SiJavascript, iconColor: "text-[#F7DF1E]" },
    { name: "HTML5 & CSS3", percentage: 50, color: "from-emerald-400 to-teal-500", icon: SiHtml5, iconColor: "text-[#E34F26]" },
  ];

  const toolCategories = [
    {
      title: "Frontend & Móvil",
      items: [
        { name: "React", percentage: 85, icon: SiReact, iconColor: "text-[#61DAFB]" },
        { name: "React Native", percentage: 70, icon: SiReact, iconColor: "text-[#61DAFB]" },
        { name: "JavaFX", percentage: 75, icon: FaJava, iconColor: "text-[#E76F00]" },
        { name: "TailwindCSS", percentage: 90, icon: SiTailwindcss, iconColor: "text-[#06B6D4]" },
        { name: "Vite", percentage: 85, icon: SiVite, iconColor: "text-[#646CFF]" },
        { name: "WebXR & Three.js", percentage: 60, icon: SiThreedotjs, iconColor: "text-slate-800 dark:text-slate-200" }
      ]
    },
    {
      title: "Backend & Arquitectura",
      items: [
        { name: "Node.js & Express", percentage: 80, icon: SiNodedotjs, iconColor: "text-[#339933]" },
        { name: "Java EE", percentage: 70, icon: FaJava, iconColor: "text-[#E76F00]" },
        { name: "JWT & Auth", percentage: 80, icon: SiJsonwebtokens, iconColor: "text-[#D63AFF]" },
        { name: "Microservicios", percentage: 65, icon: FiCpu, iconColor: "text-indigo-500" }
      ]
    },
    {
      title: "Bases de Datos",
      items: [
        { name: "MongoDB", percentage: 80, icon: SiMongodb, iconColor: "text-[#47A248]" },
        { name: "PostgreSQL", percentage: 75, icon: SiPostgresql, iconColor: "text-[#4169E1]" }
      ]
    },
    {
      title: "Herramientas & Redes",
      items: [
        { name: "Docker", percentage: 65, icon: SiDocker, iconColor: "text-[#2496ED]" },
        { name: "Git & GitHub", percentage: 85, icon: SiGit, iconColor: "text-[#F05032]" },
        { name: "Postman", percentage: 80, icon: SiPostman, iconColor: "text-[#FF6C37]" },
        { name: "Trello", percentage: 90, icon: SiTrello, iconColor: "text-[#0079BF]" },
        { name: "CCNA (Redes)", percentage: 75, icon: SiCisco, iconColor: "text-[#1BA0D7]" }
      ]
    }
  ];

  const softSkills = [
    { name: "Responsabilidad", description: "Comprometido con entregar resultados de alta calidad y cumplir los plazos acordados.", icon: FiShield, color: "text-blue-500 bg-blue-500/10" },
    { name: "Puntualidad", description: "Respeto riguroso del tiempo en entregas, reuniones y compromisos establecidos.", icon: FiClock, color: "text-amber-500 bg-amber-500/10" },
    { name: "Trabajo en Equipo", description: "Comunicación fluida y colaboración activa para alcanzar metas grupales.", icon: FiUsers, color: "text-emerald-500 bg-emerald-500/10" },
    { name: "Resolución de Problemas", description: "Pensamiento analítico y capacidad para encontrar soluciones lógicas y eficientes.", icon: FiCpu, color: "text-purple-500 bg-purple-500/10" },
    { name: "Aprendizaje Rápido", description: "Facilidad y entusiasmo para dominar nuevas tecnologías y metodologías con agilidad.", icon: FiZap, color: "text-pink-500 bg-pink-500/10" },
    { name: "Proactividad", description: "Iniciativa constante para proponer mejoras en el código y optimizar flujos de trabajo.", icon: FiHeart, color: "text-rose-500 bg-rose-500/10" },
  ];

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-[#FAF5F6]/40 dark:bg-portfolio-bg/20">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 right-5 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A111E] dark:text-white">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-secondary">Mí</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B556E] dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Desarrollador apasionado con bases sólidas en desarrollo Frontend, Backend y redes.
          </p>
        </div>

        {/* Main Grid: Info card & Skills card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Datos Generales */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/75 dark:bg-portfolio-surface/65 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 rounded-2xl p-8 md:p-10 shadow-xl shadow-primary/5 dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-[#1A111E] dark:text-white mb-6 flex items-center gap-2">
                <FiUser className="text-primary w-6 h-6" /> ¿Quién soy?
              </h3>
              <div className="space-y-4 text-[#6B556E] dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                  ¡Hola! Soy <strong className="text-primary dark:text-secondary">Byron Pineda</strong>, un apasionado desarrollador Full Stack y estudiante en la fundación <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-rose-600 dark:text-secondary dark:hover:text-primary transition-colors underline decoration-dotted">Kinal</a>. Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las cosas en la web, y desde entonces no he parado de aprender y crear.
                </p>
                <p>
                  Me especializo en construir aplicaciones web desde cero, abordando tanto el frontend con tecnologías modernas como React, como el backend desarrollando APIs eficientes. Disfruto enfrentarme a nuevos retos y transformar problemas complejos en soluciones elegantes e intuitivas.
                </p>
              </div>
            </div>

            {/* Datos Generales Card */}
            <div className="bg-white/75 dark:bg-portfolio-surface/65 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 rounded-2xl p-8 shadow-xl shadow-primary/5 dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-[#1A111E] dark:text-white mb-6">Datos Generales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-primary"><FiUser className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Nombre Completo</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Byron Steve Pineda Luna</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500"><FiCalendar className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Edad</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">18 años</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500"><FiBookOpen className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Formación Actual</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Estudiante activo en <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-indigo-500 dark:text-accent dark:hover:text-primary transition-colors underline decoration-dotted">Kinal</a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500"><FiBriefcase className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Experiencia</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Proyectos prácticos académicos</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><FiPhone className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Teléfono / WhatsApp</span>
                    <a href="tel:+50236989854" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">+502 3698 9854</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-violet-500/10 rounded-lg text-violet-500"><FiMail className="w-5 h-5" /></div>
                  <div className="overflow-hidden">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Correo Electrónico</span>
                    <a href="mailto:byronstevepinedaluna@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors break-all">byronstevepinedaluna@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades Personales Card */}
            <div className="bg-white/75 dark:bg-portfolio-surface/65 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 rounded-2xl p-8 shadow-xl shadow-primary/5 dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-[#1A111E] dark:text-white mb-6">Habilidades & Cualidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-[#FAF5F6]/70 dark:bg-portfolio-surface/25 border border-[#F0DEE3]/70 dark:border-portfolio-surface/30 hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-300">
                      <div className={`p-3 rounded-lg h-fit ${skill.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A111E] dark:text-slate-200 text-sm mb-1">{skill.name}</h4>
                        <p className="text-xs text-[#6B556E] dark:text-slate-400 leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-5 space-y-8">
            {/* Programming Languages */}
            <div className="bg-white/75 dark:bg-portfolio-surface/65 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 rounded-2xl p-8 shadow-xl shadow-primary/5 dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-[#1A111E] dark:text-white mb-6">Lenguajes de Programación</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lenguajes.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3.5 bg-[#FAF5F6]/70 dark:bg-portfolio-surface/35 rounded-xl border border-[#F0DEE3]/70 dark:border-portfolio-surface/50 hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-300"
                  >
                    {skill.icon && <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />}
                    <span className="font-semibold text-[#1A111E] dark:text-slate-200 text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="bg-white/75 dark:bg-portfolio-surface/65 backdrop-blur-md border border-[#F0DEE3] dark:border-portfolio-surface/80 rounded-2xl p-8 shadow-xl shadow-primary/5 dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-[#1A111E] dark:text-white mb-6">Tecnologías y Herramientas</h3>
              <div className="space-y-6">
                {toolCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border-b border-[#F0DEE3] dark:border-portfolio-surface/80 last:border-0 last:pb-0 pb-4">
                    <h4 className="text-sm font-bold text-primary dark:text-secondary mb-3 uppercase tracking-wider">{category.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((tech, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2.5 p-3 bg-[#FAF5F6]/70 dark:bg-portfolio-surface/35 rounded-xl border border-[#F0DEE3]/70 dark:border-portfolio-surface/50 hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-300"
                        >
                          {tech.icon && <tech.icon className={`w-5 h-5 ${tech.iconColor}`} />}
                          <span className="text-sm font-semibold text-[#1A111E] dark:text-slate-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;