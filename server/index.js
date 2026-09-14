import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import process from 'node:process';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;
const HOST = '0.0.0.0';

// Configurar trust proxy para Render (obtener la IP real del cliente)
app.set('trust proxy', 1);

// Middleware para parsear JSON
app.use(express.json());

// Ruta física del archivo CV protegido
const CV_PATH = path.join(__dirname, 'protected', 'cv.pdf');

// Configuración de contraseña (variable de entorno en Render o valor por defecto)
const GET_EXPECTED_PASSWORD = () => process.env.CV_PASSWORD || 'RubiKurumi';

// -------------------------------------------------------------
// Rate Limiter contra ataques de fuerza bruta por IP
// -------------------------------------------------------------
const MAX_FAILED_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutos
const failedAttemptsMap = new Map();

// Limpieza periódica cada 30 minutos para evitar consumo innecesario de memoria
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of failedAttemptsMap.entries()) {
    if (now - record.lastAttempt > BLOCK_DURATION_MS) {
      failedAttemptsMap.delete(ip);
    }
  }
}, 30 * 60 * 1000);

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const record = failedAttemptsMap.get(ip);

  if (!record) return { blocked: false };

  // Si ya pasó el tiempo de bloqueo, reiniciamos
  if (now - record.lastAttempt > BLOCK_DURATION_MS) {
    failedAttemptsMap.delete(ip);
    return { blocked: false };
  }

  if (record.count >= MAX_FAILED_ATTEMPTS) {
    const minutesRemaining = Math.ceil((BLOCK_DURATION_MS - (now - record.lastAttempt)) / 60000);
    return {
      blocked: true,
      minutesRemaining,
    };
  }

  return { blocked: false };
}

function recordFailedAttempt(ip) {
  const now = Date.now();
  const record = failedAttemptsMap.get(ip) || { count: 0, lastAttempt: now };
  record.count += 1;
  record.lastAttempt = now;
  failedAttemptsMap.set(ip, record);
}

function resetFailedAttempts(ip) {
  failedAttemptsMap.delete(ip);
}

// -------------------------------------------------------------
// Comparación de contraseña a prueba de ataques de temporización
// -------------------------------------------------------------
function verifyPassword(inputPassword, expectedPassword) {
  if (typeof inputPassword !== 'string' || typeof expectedPassword !== 'string') {
    return false;
  }
  const inputBuffer = Buffer.from(inputPassword, 'utf8');
  const expectedBuffer = Buffer.from(expectedPassword, 'utf8');
  if (inputBuffer.length !== expectedBuffer.length) {
    return false;
  }
  return crypto.timingSafeEqual(inputBuffer, expectedBuffer);
}

// -------------------------------------------------------------
// Endpoints de Seguridad para CV
// -------------------------------------------------------------

// Bloquear accesos directos por GET al endpoint o a /cv.pdf
app.get('/api/cv/download', (req, res) => {
  res.status(405).json({
    error: 'Método no permitido. Por seguridad, la descarga debe realizarse autenticándose mediante POST.',
  });
});

app.get('/cv.pdf', (req, res) => {
  res.status(404).send('Not Found');
});

// Endpoint protegido para descargar el CV
app.post('/api/cv/download', (req, res) => {
  const ip = getClientIp(req);
  const rateLimitStatus = checkRateLimit(ip);

  if (rateLimitStatus.blocked) {
    return res.status(429).json({
      error: `Demasiados intentos fallidos. Por motivos de seguridad, el acceso ha sido bloqueado temporalmente. Intenta nuevamente en ${rateLimitStatus.minutesRemaining} minuto(s).`,
    });
  }

  const { password } = req.body || {};

  if (!password) {
    return res.status(400).json({
      error: 'La contraseña es requerida para descargar el CV.',
    });
  }

  const expectedPassword = GET_EXPECTED_PASSWORD();
  const isMatch = verifyPassword(password, expectedPassword);

  if (!isMatch) {
    recordFailedAttempt(ip);
    const currentRecord = failedAttemptsMap.get(ip);
    const attemptsLeft = MAX_FAILED_ATTEMPTS - (currentRecord?.count || 0);

    return res.status(401).json({
      error: attemptsLeft > 0
        ? `Contraseña incorrecta. Te quedan ${attemptsLeft} intento(s) antes de un bloqueo temporal.`
        : 'Contraseña incorrecta. Has alcanzado el límite de intentos y la descarga ha sido bloqueada temporalmente.',
    });
  }

  // Si la contraseña es correcta, reiniciamos el contador de intentos fallidos
  resetFailedAttempts(ip);

  // Validar existencia física del archivo
  if (!fs.existsSync(CV_PATH)) {
    console.error(`[ERROR] Archivo protegido no encontrado en: ${CV_PATH}`);
    return res.status(500).json({
      error: 'Error interno: El archivo de CV no está disponible en el servidor.',
    });
  }

  // Cabeceras de protección de descarga y no almacenamiento en caché
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="ByronPineda_CV.pdf"');

  // Enviar el archivo como stream seguro
  res.sendFile(CV_PATH);
});

// -------------------------------------------------------------
// Servir Frontend Estático y SPA
// -------------------------------------------------------------
const distPath = path.join(__dirname, '..', 'dist');

// Servir archivos estáticos generados por Vite
app.use(express.static(distPath));

// Fallback para React Router (cualquier ruta no encontrada devuelve index.html)
app.use((req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend no compilado. Ejecuta pnpm run build.');
  }
});

// Iniciar servidor
app.listen(PORT, HOST, () => {
  console.log(`🔒 Servidor seguro iniciado en http://${HOST}:${PORT}`);
});
