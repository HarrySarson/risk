'use strict';

import Debug from 'debug';

const IO = require('socket.io-client');

let debug = Debug('risk:client:main');

let socket = IO('', {
  transports: ['websocket']
});


socket.on('connect', function() {
  
  debug(`connection to server made, this client has id ${socket.id}`);
  debug('connected to socket: ', this);
  
});

socket.on('initial-state', function(state) {
  
  debug('recieved initial state: ', state);
  
});


socket.on('disconnect', function() {
  
  debug('disconnected from socket');
  
});

