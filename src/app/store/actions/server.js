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

function connectionAttempt() {
  return {
    type: SERVER.CONNECTION.ATTEMPT,
  };
}

const reconnectionAttempts = 10;

export const server = {
  connect(url) {
    return (dispatch, getState) => {
      
      let state = getState();
      
      if (state.getIn(['server', 'connection'])) {
        debug('Already connected to server');
        return;
      } else if (state.getIn(['server', 'attemptingConnection'])) {
        debug('Already attempting to connect to server');
        return;
      }
      
      debug(`Attemping connection to server at ${url || '/'}`);
      
      dispatch(connectionAttempt());
      
      
      let socket = IO(url, {
        transports: ['websocket'],
        reconnectionAttempts: reconnectionAttempts,
      });

      socket.on('connect', () => {
        
        debug(`connection to server made, this client has id ${socket.id}`);
        
        dispatch({
          type: SERVER.CONNECTION.MAKE,
          id: socket.id,
        });
        
      }).on('connect_error', err => {
        
        debug(`error connecting to server: ${err}`);
        
        if (!getState().getIn(['server', 'attemptingConnection'])) {
          debug(new Error('action creater server.connection: connection error when no connection was being attempted'));
        }
          
      }).on('reconnect_attempt', (i) => {
        
        debug(`attempting to reconnect to server, attempt: ${i}/${reconnectionAttempts}`);
        
      }).on('reconnect_failed', () => {
        
        debug(`connection to server failed`);
        
        dispatch({
          type: SERVER.CONNECTION.FAIL,
        });
        
      }).on('disconnect', () => {
        
        debug(`disconnected from socket`);
        
        dispatch({
          type: SERVER.CONNECTION.LOSE,
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
