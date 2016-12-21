import { types } from '../actions';

import Debug from 'debug';

let debug = Debug('risk:app:reducers');


export function territories(state, action) {
  debug('reducing action: ', action);
  
  switch (action.type) {
    case: types.GAME.REINFORCE
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