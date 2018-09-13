'use strict';
const http = require('http');
const staticWeb = require('node-static');
const WebSocketServer = require('ws');
// const calcRur = require('./backend/calc_rur');


//Указываем начальную директорию для сервера
let file = new staticWeb.Server('./dist/dev');

// Запуск обычного сервера (статика) на порту 3000
http.createServer((req, res) => {
  file.serve(req, res);
}).listen(3000);

// Запускаем WebSocket-сервер на порту 3001
let webSocketServer = new WebSocketServer.Server({port: 3001});

webSocketServer.on('connection', ws => {

  console.log("новое соединение");

  ws.on('message', message => {

    /**
     * Полученную цифру отдаем на обаботку модулю calcRur,
     * а результат возвращаем отправителю
     */
    // ws.send(calcRur(message));
    ws.send(console.log(message));
  });

  ws.on('close', () => {
    console.log('соединение закрыто');
  });

});

console.log('Server running on port 3000, WS: 3001');