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
    { name: "Java", icon: FaJava, iconColor: "text-[#E76F00]" },
    { name: "SQL", icon: TbSql, iconColor: "text-[#00758F]" },
    { name: "JavaScript", icon: SiJavascript, iconColor: "text-[#F7DF1E]" },
    { name: "HTML5 & CSS3", icon: SiHtml5, iconColor: "text-[#E34F26]" },
  ];

  const toolCategories = [
    {
      title: "Frontend & Móvil",
      items: [
        { name: "React", icon: SiReact, iconColor: "text-[#61DAFB]" },
        { name: "React Native", icon: SiReact, iconColor: "text-[#61DAFB]" },
        { name: "JavaFX", icon: FaJava, iconColor: "text-[#E76F00]" },
        { name: "TailwindCSS", icon: SiTailwindcss, iconColor: "text-[#06B6D4]" },
        { name: "Vite", icon: SiVite, iconColor: "text-[#646CFF]" },
        { name: "WebXR & Three.js", icon: SiThreedotjs, iconColor: "text-slate-700 dark:text-slate-300" }
      ]
    },
    {
      title: "Backend & Arquitectura",
      items: [
        { name: "Node.js & Express", icon: SiNodedotjs, iconColor: "text-[#339933]" },
        { name: "Java EE", icon: FaJava, iconColor: "text-[#E76F00]" },
        { name: "JWT & Auth", icon: SiJsonwebtokens, iconColor: "text-[#D63AFF]" },
        { name: "Microservicios", icon: FiCpu, iconColor: "text-indigo-500" }
      ]
    },
    {
      title: "Bases de Datos",
      items: [
        { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]" },
        { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169E1]" }
      ]
    },
    {
      title: "Herramientas & Redes",
      items: [
        { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ED]" },
        { name: "Git & GitHub", icon: SiGit, iconColor: "text-[#F05032]" },
        { name: "Postman", icon: SiPostman, iconColor: "text-[#FF6C37]" },
        { name: "Trello", icon: SiTrello, iconColor: "text-[#0079BF]" },
        { name: "CCNA (Redes)", icon: SiCisco, iconColor: "text-[#1BA0D7]" }
      ]
    }
  ];

  const softSkills = [
    { name: "Responsabilidad", description: "Comprometido con entregar resultados de alta calidad y cumplir los plazos acordados.", icon: FiShield },
    { name: "Puntualidad", description: "Respeto riguroso del tiempo en entregas, reuniones y compromisos establecidos.", icon: FiClock },
    { name: "Trabajo en Equipo", description: "Comunicación fluida y colaboración activa para alcanzar metas grupales.", icon: FiUsers },
    { name: "Resolución de Problemas", description: "Pensamiento analítico y capacidad para encontrar soluciones lógicas y eficientes.", icon: FiCpu },
    { name: "Aprendizaje Rápido", description: "Facilidad y entusiasmo para dominar nuevas tecnologías y metodologías con agilidad.", icon: FiZap },
    { name: "Proactividad", description: "Iniciativa constante para proponer mejoras en el código y optimizar flujos de trabajo.", icon: FiHeart },
  ];

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-[#F4F6F8]/60 dark:bg-portfolio-bg/20">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-slate-400/10 dark:bg-slate-800/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 right-5 w-72 h-72 bg-[#991B1B]/5 dark:bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            Sobre <span className="text-[#991B1B] dark:text-red-500">Mí</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Desarrollador apasionado con bases sólidas en desarrollo Frontend, Backend y redes.
          </p>
        </div>

        {/* Main Grid: Info card & Skills card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Datos Generales */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-10 shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6 flex items-center gap-2">
                <FiUser className="text-[#991B1B] dark:text-red-400 w-6 h-6" /> ¿Quién soy?
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                  ¡Hola! Soy <strong className="text-[#991B1B] dark:text-red-400">Byron Pineda</strong>, un apasionado desarrollador Full Stack y estudiante en la fundación <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-[#991B1B] dark:text-red-400 hover:underline transition-colors decoration-dotted">Kinal</a>. Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las cosas en la web, y desde entonces no he parado de aprender y crear.
                </p>
                <p>
                  Me especializo en construir aplicaciones web desde cero, abordando tanto el frontend con tecnologías modernas como React, como el backend desarrollando APIs eficientes. Disfruto enfrentarme a nuevos retos y transformar problemas complejos en soluciones elegantes e intuitivas.
                </p>
              </div>
            </div>

            {/* Datos Generales Card */}
            <div className="bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Datos Generales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiUser className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Nombre Completo</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Byron Steve Pineda Luna</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiCalendar className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Edad</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">18 años</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiBookOpen className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Formación Actual</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Estudiante activo en <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-[#991B1B] dark:text-red-400 hover:underline transition-colors decoration-dotted">Kinal</a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiBriefcase className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Experiencia</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Proyectos prácticos académicos</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiPhone className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Teléfono / WhatsApp</span>
                    <a href="tel:+50236989854" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#991B1B] dark:hover:text-red-400 transition-colors">+502 3698 9854</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#991B1B] dark:text-red-400"><FiMail className="w-5 h-5" /></div>
                  <div className="overflow-hidden">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Correo Electrónico</span>
                    <a href="mailto:byronstevepinedaluna@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#991B1B] dark:hover:text-red-400 transition-colors break-all">byronstevepinedaluna@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades Personales Card */}
            <div className="bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Habilidades & Cualidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#11141B] border border-slate-200 dark:border-slate-800 hover:border-[#991B1B]/40 dark:hover:border-[#991B1B]/40 transition-all duration-300">
                      <div className="p-3 rounded-lg h-fit text-[#991B1B] dark:text-red-400 bg-[#991B1B]/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F172A] dark:text-slate-200 text-sm mb-1">{skill.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{skill.description}</p>
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
            <div className="bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Lenguajes de Programación</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lenguajes.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-[#11141B] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#991B1B]/40 dark:hover:border-[#991B1B]/40 transition-all duration-300"
                  >
                    {skill.icon && <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />}
                    <span className="font-semibold text-[#0F172A] dark:text-slate-200 text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="bg-white dark:bg-[#181C24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Tecnologías y Herramientas</h3>
              <div className="space-y-6">
                {toolCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0 pb-4">
                    <h4 className="text-sm font-bold text-[#991B1B] dark:text-red-400 mb-3 uppercase tracking-wider">{category.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((tech, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2.5 p-3 bg-slate-50 dark:bg-[#11141B] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#991B1B]/40 dark:hover:border-[#991B1B]/40 transition-all duration-300"
                        >
                          {tech.icon && <tech.icon className={`w-5 h-5 ${tech.iconColor}`} />}
                          <span className="text-sm font-semibold text-[#0F172A] dark:text-slate-300">{tech.name}</span>
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