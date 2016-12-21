import Debug from 'debug';
import { getTypes } from 'helper';

let debug = Debug('risk:app:actions');

const 

export const GAME = getTypes([
  'CHANGE_OWNER',
  'REINFORCE',
]);


export const game = {
  
  changeOwner(territory, newOwner) {
    debug(`creating: ${CHANGE_OWNER} with territory = ${territory} and newOwner = ${newOwner}`);
    return {
      type: CHANGE_OWNER,
      territory,
      newOwner,
    };
  },
  
  reinforce(territory, reinforcementCount) {
    debug(`creating: ${REINFORCE} with territory = ${territory} and reinforcementCount = ${reinforcementCount}`);
    
    return {
      type: REINFORCE,
      territory,
      reinforcementCount,
    };
  },

};
