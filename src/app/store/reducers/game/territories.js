import { GAME } from '../../actions/game';
import { initialState } from '../../initial-state';

import Debug from 'debug';

let debug = Debug('risk:app:reducers');


export function territories(state = initialState.game.territories, action) {
  debug('reducing game.territories: ', action);
  
  switch (action.type) {
    case GAME.REINFORCE:
      return state.update(
        action.territory, 
        territoryObj => territoryObj.update(
          'troopCount', 
          troopCount => troopCount + action.reinforcementCount,
        ),
      );
    case GAME.CHANGE_OWNER:
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