# Install dependencies only when needed
# Stage 0
FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json ./
RUN yarn install
#############################################


# Rebuild the source code only when needed
# Stage 1
FROM node:16-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build 
#############################################


# Production image, copy only production files
# Stage 2
FROM node:16-alpine AS prod
WORKDIR /app


COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=web:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/user.json ./user.json

USER web
EXPOSE 3000
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
#############################################
