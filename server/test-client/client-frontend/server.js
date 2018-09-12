var { createServer } = require('http');
var { Server } = require('node-static');
var file = new Server('./src/');

var server = createServer((req, res) => {
	file.serve(req, res);
})

server.listen(8080);

console.log('Server running on port 8080');
