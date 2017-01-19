import { combineReducers } from 'redux-immutable';
import { SERVER } from '../actions/server';
import Immutable from 'immutable';

import Debug from 'debug';

let debug = Debug('risk:app:reducers');

const initialState = Immutable.fromJS({
    
  connected: false,
  
  attemptingConnection: false,
        
  gameState: {      
    valid: false,      
    isFetching: false,      
    didInvalidate: false,      
  },
  
  
});

const reducers = {

  connected(state = initialState.get('connected'), action) {
    debug('reduce server.connected: ', action);
    
    switch (action.type) {
      case SERVER.CONNECTION.MAKE:
        return true;
      case SERVER.CONNECTION.LOSE:
        return false;      
      default:
        return state;
    }
  },
  
  attemptingConnection(state = initialState.get('attemptingConnection'), action) {
    debug('reduce server.attemptingConnection: ', action);
    
    switch (action.type) {
      case SERVER.CONNECTION.ATTEMPT:
        return true;
      case SERVER.CONNECTION.LOSE:
      case SERVER.CONNECTION.MAKE:
      case SERVER.CONNECTION.FAIL:
        return false;      
      default:
        return state;
    }    
  },

  gameState(state = initialState.get('gameState'), action) {
    debug('reduce server.gameState: ', action);
    
    switch (action.type) {
            
      default:
        return state;
      
    }
  },
};

export const server = combineReducers(reducers);
