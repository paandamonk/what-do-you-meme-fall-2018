FROM node:8.12.0-alpine

WORKDIR /opt/app

ENV PORT=80
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install
COPY . .
#RUN npm run build

CMD npm start