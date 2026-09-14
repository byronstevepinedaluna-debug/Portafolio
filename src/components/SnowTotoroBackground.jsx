import { useMemo } from 'react';
import funkoImg from '../assets/funko.png';

// Partícula del Funko Pop personalizado
const FunkoParticle = ({ width = 28, opacity = 0.65 }) => (
  <img
    src={funkoImg}
    alt="Funko Particle"
    style={{ width: `${width}px`, height: 'auto', opacity }}
    className="pointer-events-none object-contain drop-shadow-sm select-none"
  />
);

// Copo de nieve cristalino sólido
const SnowflakeParticle = ({ size = 14, color, opacity = 0.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color, opacity }}
    className="pointer-events-none"
  >
    <path d="M12,0 L12,24 M0,12 L24,12 M3.5,3.5 L20.5,20.5 M3.5,20.5 L20.5,3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const SnowTotoroBackground = () => {
  const particles = useMemo(() => {
    // Paleta de nieve y estilo elegante (blanco, plateado, pizarra, azul marino)
    const snowColors = [
      '#FFFFFF', // Blanco puro
      '#E2E8F0', // Pizarra muy clara
      '#CBD5E1', // Acero plateado
      '#94A3B8', // Pizarra media
      '#1E3A8A', // Azul marino sutil del traje
    ];

    const count = 28;
    const items = [];

    for (let i = 0; i < count; i++) {
      const isSnow = i % 4 === 0;
      const left = Math.floor((i / count) * 96 + ((i * 19) % 4));
      const duration = 12 + ((i * 37) % 14); // 12s a 26s
      const delay = -((i * 43) % 25);
      const sway = -30 + ((i * 59) % 60);
      const rotation = -15 + ((i * 47) % 30);
      const color = snowColors[i % snowColors.length];
      const size = isSnow ? 14 + ((i * 7) % 8) : 26 + ((i * 11) % 14);
      const opacity = 0.35 + (((i * 13) % 35) / 100);

      items.push({
        id: i,
        isSnow,
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
        @keyframes funkoSnowFall {
          0% {
            transform: translateY(-90px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--snow-op, 0.55);
          }
          85% {
            opacity: var(--snow-op, 0.55);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) translateX(var(--snow-sway, 25px)) rotate(var(--snow-rot, 15deg));
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
            animation: `funkoSnowFall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            '--snow-op': p.opacity,
            '--snow-sway': `${p.sway}px`,
            '--snow-rot': `${p.rotation}deg`,
          }}
        >
          {p.isSnow ? (
            <SnowflakeParticle size={p.size} color={p.color} opacity={p.opacity} />
          ) : (
            <FunkoParticle width={p.size} opacity={p.opacity} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SnowTotoroBackground;
