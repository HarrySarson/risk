import { REINFORCE } from '../actions/reinforce';
import { CHANGE_OWNER } from '../actions/change-owner';
import Debug from 'debug';

let debug = Debug('risk:app:reducers');


export function territories(state, action) {
  debug('recieved action: ', action);
  switch (action.type) {
    case REINFORCE:
      return state.update(
        action.territory, 
        territoryObj => territoryObj.update(
          'troopCount', 
          troopCount => troopCount + action.reinforcementCount,
        ),
      );
    case CHANGE_OWNER:
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