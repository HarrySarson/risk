const path = require('path');
const Express = require('express');
const SocketIo = require('socket.io');
const http = require('http');


const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

import { initialState } from './initial-state';
import Debug from 'debug';

let debug = Debug('risk:server:main');
let app = Express();

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

debug('initial-state ', initialState);

let server = http.Server(app);
let io = SocketIo(server);

io.on('connection', socket => {
  debug('connection made with', socket.id);
  socket.emit('initial-state', JSON.stringify(initialState));
});

server.listen(process.env.PORT || 3000, () => {
  let port = server.address().port;

  debug('Server is listening on port %s', port);
});

