import { SERVER } from '../actions/server';
import { initialState } from '../../initial-state';

import Debug from 'debug';

let debug = Debug('risk:app:reducers');

const initialState = {
    
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
  
};

const reducers = {

  connected(state = initialState.connected, action) {
    debug('reduce server.connected: ', action);
    
    switch (action.type) {
      
      default:
        return state;
    }
  
  }

function gameState(state = initialState.gameState, action) {
  debug('reduce server.gameState: ', action);
  
  switch (action.type) {
    
    case SERVER.REQUEST.STATE:
      return state.merge({
        isFetching: true,
        didInvalidate: false,
      });
      
    default:
      return state;
    
  }
}

function validActions(state = initialState.validActions, action) {
  debug('reduce server.gameState: ', action);
  
  switch (action.type) {
    
    case SERVER.REQUEST.VALID_ACTIONS:
      return state.merge({
        isFetching: true,
        didInvalidate: false,
      });
      
    default:
      return state;
    
  }
}

export function server(state = initialState, action) {
  debug('reducing server: ', action);
  
  switch (action.type) {
    case: SERVER.REQUEST.STATE
      return state.update(
        action.territory, 
        territoryObj => territoryObj.update(
          'troopCount', 
          troopCount => troopCount + action.reinforcementCount,
        ),
      );
    case types.GAME.CHANGE_OWNER:
      return state.update(
        action.territory,
        territoryObj => territoryObj.set(
          'owner',
          action.newOwner,
        ),
      );
    default:
      return state;
  }
}