FROM node:8

WORKDIR /usr/src/app/widget-backend

COPY package*.json ./
COPY package-lock.json ./
COPY server.js ./

RUN npm install

EXPOSE 8081

CMD [ "node", "server.js" ]
