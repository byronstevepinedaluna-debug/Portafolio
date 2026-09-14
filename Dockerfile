# Stage 1: Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package configuration files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code and build frontend
COPY . .
RUN pnpm run build

# Stage 2: Production runtime stage with Node.js
FROM node:22-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package configuration files and install production dependencies only
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy compiled frontend from build stage
COPY --from=build /app/dist ./dist

# Copy backend server and protected storage
COPY server ./server

# Environment configuration
ENV NODE_ENV=production
ENV PORT=80

# Expose port 80 for Render Web Service
EXPOSE 80

# Start secure Node.js server
CMD ["node", "server/index.js"]
