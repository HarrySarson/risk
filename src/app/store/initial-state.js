
import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  
  game: {
    territories: new Map(),
  
    players: new Map(), 
  },

  server: {
    
    connected: false,
    
    attemptionConnect: false,
    
    validActions: [],
        
    gameState: {      
      valid: false,      
      isFetching: false,      
      didInvalidate: false,      
    },
    
    // TODO: confusing name? 
    // list of actions that client can send to server.
    validActions: {      
      value: [],
      valid: false,
      isFetching: false,
      didInvalidate: false,      
    },
    
  },
    
});