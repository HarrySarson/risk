import 'Debug' from 'debug';

let debug = Debug('risk:app:actions');

export const CHANGE_OWNER = 'CHANGE_OWNER';

export function changeOwner(territory, newOwner) {
  debug(`creating: ${CHANGE_OWNER} with territory = ${territory} and newOwner = ${newOwner}`);
  return {
    type: CHANGE_OWNER,
    territory,
    newOwner,
  };
}