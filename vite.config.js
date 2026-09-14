import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import process from 'node:process'
import { Buffer } from 'node:buffer'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function cvApiDevPlugin() {
  return {
    name: 'cv-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/cv/download', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ error: 'Método no permitido. Utiliza POST.' }))
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })

        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}')
            const password = data.password
            const expectedPassword = process.env.CV_PASSWORD || 'RubiKurumi'

            if (!password) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ error: 'La contraseña es requerida.' }))
            }

            const inputBuf = Buffer.from(password, 'utf8')
            const expBuf = Buffer.from(expectedPassword, 'utf8')
            const isMatch = inputBuf.length === expBuf.length && crypto.timingSafeEqual(inputBuf, expBuf)

            if (!isMatch) {
              res.statusCode = 401
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ error: 'Contraseña incorrecta. Verifica e intenta de nuevo.' }))
            }

            const cvFilePath = path.resolve(__dirname, 'server/protected/cv.pdf')
            if (!fs.existsSync(cvFilePath)) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ error: 'El archivo CV no se encuentra en el servidor.' }))
            }

            const stat = fs.statSync(cvFilePath)
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Length', stat.size)
            res.setHeader('Content-Disposition', 'attachment; filename="ByronPineda_CV.pdf"')
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private')

            const readStream = fs.createReadStream(cvFilePath)
            readStream.pipe(res)
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Formato de petición inválido.' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cvApiDevPlugin()],
})
