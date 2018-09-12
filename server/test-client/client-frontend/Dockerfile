FROM node:8

WORKDIR /usr/src/app/widget-client

COPY package*.json ./
COPY src ./src
COPY package-lock.json ./
COPY server.js ./
RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]
