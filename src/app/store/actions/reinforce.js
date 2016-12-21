import 'Debug' from 'debug';

let debug = Debug('risk:app:actions');

export const REINFORCE = 'REINFORCE';

export function reinforce(territory, reinforcementCount) {
  debug(`creating: ${REINFORCE} with territory = ${territory} and reinforcementCount = ${reinforcementCount}`);
  
  return {
    type: REINFORCE,
    territory,
    reinforcementCount,
  };
}