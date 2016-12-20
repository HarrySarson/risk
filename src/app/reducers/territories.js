import { REINFORCE } from '../actions/reinforce';
import { CHANGE_OWNER } from '../actions/change-owner';



export function territories(state, action) {
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