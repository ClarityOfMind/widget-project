'use strict';
const http = require('http');
const staticWeb = require('node-static');
const WebSocketServer = require('ws');
// const urlParam = require('url');

//
// function getUrlParam(params){

//   console.log('парам - ', params.position);
//   console.log('парам - ', params.theme);
// };

//Указываем начальную директорию для сервера
let file = new staticWeb.Server('./dist/dev');

// Запуск обычного сервера (статика) на порту 3000
http.createServer((req, res) => {
  file.serve(req, res);

    // let position = urlParam.parse(req.url, true);
    // if (position.pathname === '/js/script.js'){
    //   getUrlParam(position.query);
    // };
  

}).listen(3000);

// Запускаем WebSocket-сервер на порту 3001
let webSocketServer = new WebSocketServer.Server({port: 3001});

webSocketServer.on('connection', ws => {

  console.log("новое соединение");

  ws.on('message', message => {
    console.log(message);
    setTimeout( function(){
      ws.send('{"id":"16179021449697941536925268929","messages":[{"time":1536925704189,"message":"Отправлено ввиде строки JSON","type":"manager"}]}');
    },700);
    
  });

  ws.on('close', () => {
    console.log('соединение закрыто');
  });

});

console.log('Server running on port 3000, WS: 3001');