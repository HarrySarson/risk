const path = require('path');
const express = require('express');
const WebSocketServer = require('ws').server;
const http = require('http');

import Debug from 'debug';

let debug = Debug('risk:server:main');


let app = express();
let server = http.createServer(app);

let wss = new WebSocketServer({
  server,
});

const port = 3000;

wss.on('connection', ws => {
  debug('Connection: ', ws);
  
  
  ws.on('message', message {
    debug('received: ', message);
  });
});
  
server.listen(process.env.PORT || port, () => {
  let port = server.address().port;

  debug('Server is listening on port %s', port);
});

