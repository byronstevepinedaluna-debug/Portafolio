import { useMemo } from 'react';

// Silueta vectorizada fiel de Totoro (de la imagen del usuario), renderizada con fill="currentColor"
const TotoroParticle = ({ size = 26, color, opacity = 0.45 }) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 100 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, opacity }}
    className="drop-shadow-sm transition-opacity"
  >
    {/* Cuerpo y orejas de Totoro */}
    <path
      d="M26,38 C23,22 25,6 33,6 C39,6 40,22 39,36 C42,34 46,33 50,33 C54,33 58,34 61,36 C60,22 61,6 67,6 C75,6 77,22 74,38 C88,48 94,66 92,85 C90,100 80,108 50,108 C20,108 10,100 8,85 C6,66 12,48 26,38 Z"
      fill="currentColor"
    />
    {/* Cola redondeada */}
    <ellipse cx="88" cy="88" rx="7" ry="9" fill="currentColor" />
    {/* Patitas */}
    <ellipse cx="32" cy="108" rx="6" ry="3.5" fill="currentColor" />
    <ellipse cx="68" cy="108" rx="6" ry="3.5" fill="currentColor" />
    {/* Barriga suave */}
    <path
      d="M26,76 C26,62 36,54 50,54 C64,54 74,62 74,76 C74,94 65,102 50,102 C35,102 26,94 26,76 Z"
      fill="white"
      fillOpacity="0.82"
    />
    {/* Marcas características en forma de flechitas/chevrons en la barriga */}
    <path
      d="M38,68 C38,65 41,63 44,68 M47,68 C47,65 50,63 53,68 M56,68 C56,65 59,63 62,68"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ojos saltones y tiernos */}
    <circle cx="36" cy="46" r="6.5" fill="white" />
    <circle cx="35.5" cy="46" r="2.8" fill="#150E1A" />
    <circle cx="64" cy="46" r="6.5" fill="white" />
    <circle cx="64.5" cy="46" r="2.8" fill="#150E1A" />
    {/* Nariz */}
    <ellipse cx="50" cy="48" rx="3.5" ry="1.8" fill="#150E1A" />
    {/* Bigotes */}
    <line x1="10" y1="46" x2="22" y2="48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="10" y1="52" x2="22" y2="52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="58" x2="23" y2="55" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="90" y1="46" x2="78" y2="48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="90" y1="52" x2="78" y2="52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="88" y1="58" x2="77" y2="55" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Destello astral de 4 puntas inspirado en la estética de Kurumi
const AstralSparkle = ({ size = 16, color, opacity = 0.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color, opacity }}
    className="drop-shadow-sm"
  >
    <path d="M12,0 C12,6.627 6.627,12 0,12 C6.627,12 12,17.373 12,24 C12,17.373 17.373,12 24,12 C17.373,12 12,6.627 12,0 Z" />
  </svg>
);

const SnowTotoroBackground = () => {
  // Generar un conjunto fijo de copos de nieve flotantes
  const particles = useMemo(() => {
    // Paleta de colores de Kurumi Tokisaki (rojo rubí, dorado reloj, rosa carmesí y perla)
    const kurumiColors = [
      '#E11D48', // Rojo rubí intenso
      '#F59E0B', // Dorado ámbar (ojo del reloj)
      '#BE123C', // Carmesí oscuro
      '#FBBF24', // Dorado brillante
      '#FB7185', // Rosa rubí suave
      '#FDA4AF', // Rosa perla
    ];

    const count = 30;
    const items = [];

    for (let i = 0; i < count; i++) {
      const isSparkle = i % 5 === 0; // Cada 5 partículas un destello astral
      const left = Math.floor((i / count) * 96 + ((i * 19) % 4)); // Distribución uniforme y determinista
      const duration = 12 + ((i * 37) % 14); // 12s a 26s
      const delay = -((i * 43) % 25); // Inicia en diferentes momentos (ya cayendo)
      const sway = -35 + ((i * 59) % 70); // Desplazamiento horizontal entre -35px y +35px
      const rotation = -35 + ((i * 47) % 75); // Rotación
      const color = kurumiColors[i % kurumiColors.length];
      const size = isSparkle ? 12 + ((i * 7) % 10) : 20 + ((i * 11) % 18);
      const opacity = 0.28 + (((i * 13) % 40) / 100); // 0.28 a 0.68

      items.push({
        id: i,
        isSparkle,
        left,
        duration,
        delay,
        sway,
        rotation,
        color,
        size,
        opacity,
      });
    }

    return items;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      <style>{`
        @keyframes totoroSnowFall {
          0% {
            transform: translateY(-80px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--snow-op, 0.45);
          }
          85% {
            opacity: var(--snow-op, 0.45);
          }
          100% {
            transform: translateY(calc(100vh + 90px)) translateX(var(--snow-sway, 25px)) rotate(var(--snow-rot, 25deg));
            opacity: 0;
          }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${p.left}%`,
            animation: `totoroSnowFall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            '--snow-op': p.opacity,
            '--snow-sway': `${p.sway}px`,
            '--snow-rot': `${p.rotation}deg`,
          }}
        >
          {p.isSparkle ? (
            <AstralSparkle size={p.size} color={p.color} opacity={p.opacity} />
          ) : (
            <TotoroParticle size={p.size} color={p.color} opacity={p.opacity} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SnowTotoroBackground;
