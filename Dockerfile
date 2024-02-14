FROM node:21 AS build-stage
WORKDIR /web
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8090
CMD ["npm", "run", "dev"]
