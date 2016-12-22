import Debug from 'debug';

let debug = Debug('risk:app:actions');

const IO = require('socket.io-client');

export const SERVER = {
 
  CONNECTION: {
    ATTEMPT: 'SERVER.ATTEMPT',
    FAIL: 'SERVER.FAIL',
    MAKE: 'SERVER.MAKE',
    LOSE: 'SERVER.LOSE',
  },
  
  // request made to the server
  REQUEST: {
    STATE: 'SERVER.REQUESTS.STATE',
    REQUIRED_ACTION: 'SERVER.REQUESTS.REQUIRED_ACTION',
  },
  // responce from server to requests
  RECIEVE: {
    STATE: 'SERVER.RECIEVE.STATE',
    VALID_ACTIONS: 'SERVER.RECIEVE.VALID_ACTIONS',
  },
  // requirement from server
  REQUIRE: {
    IDENTIFICATION: 'SERVER.REQUIRE.IDENTIFICATION',
  },
  // responce produced by client to fullfill requirement from server
  PRODUCE: {
    IDENTIFICATION: 'SERVER.PRODUCE.IDENTIFICATION',
  },
};


export const server = {
  connect(url, options) {
    return (dispatch, getState) => {
      
      debug(`Attemping connection to server at ${url}`);
      
      dispatch({
        type: SERVER.CONNECTION.ATTEMPT,
      });
      
      let connectionStatus = new Promise((res, rej) => {
      
        let socket = IO('', {
          transports: ['websocket']
        });

        socket.on('connect', () => {
          
          debug(`connection to server made, this client has id ${socket.id}`);
          
          dispatch({
            type: SERVER.CONNECTION.MAKE,
            id: socket.id,
          });
          
          res();
          
        }).on('error', () => {
          
          debug('error connecting to socket');
          
          if (!getState().attemptingConnection) {
            throw new Error('action creater server.connection: connection error when no connection was being attempted');
          }
          
          rej();
          
          dispatch({
            type: SERVER.CONNECTION.FAIL,
          })
        }).on('reconnect', (i) => {
              
          debug('reconnecting: ' + i);
            
        }).on('disconnect', () => {
          
          debug('disconnected from socket');
          
          dispatch({
            type: SERVER.CONNECTION.LOSE,
          });
          
          
        });
      });      
    };
  },
  
  request: {
    state() {
      debug(`creating: ${SERVER.REQUEST.STATE}`);
      return {
        type: SERVER.REQUEST.STATE,
      };
    },
    requiredAction() {
      debug(`creating: ${SERVER.REQUEST.REQUIRED_ACTION}`);
      
      return {
        type: SERVER.REQUEST.REQUIRED_ACTION,
      };
    },
  },
  recieve: {
    state() {
      debug(`creating: ${SERVER.RECIEVE.STATE}`);
      return {
        type: SERVER.RECIEVE.STATE,
      };
    },
    requiredAction() {
      debug(`creating: ${SERVER.RECIEVE.REQUIRED_ACTION}`);
      
      return {
        type: SERVER.RECIEVE.REQUIRED_ACTION,
      };
    },
  },
  require: {
    identification() {
      debug(`creating: ${SERVER.REQUIRE.IDENTIFICATION}`);
      return {
        type: SERVER.REQUIRE.IDENTIFICATION,
      };
    },
  },
  produce: {
    identification() {
      debug(`creating: ${SERVER.PRODUCE.IDENTIFICATION}`);
      return {
        type: SERVER.PRODUCE.IDENTIFICATION,
      };
    },
  },
};
