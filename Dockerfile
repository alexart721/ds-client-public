FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx next build
EXPOSE 3001
ENV PORT=3001
CMD ["npx", "next", "start"]