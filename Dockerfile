FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

COPY package*.json ./
RUN npm install --omit=dev

COPY server.js ./
COPY public ./public

EXPOSE 3001

CMD ["npm", "start"]
