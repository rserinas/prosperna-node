const http = require('http');
const app = require('./app');
const socket = require('socket.io');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socket(server);

global.io = io;

server.listen(port);