import Debug from 'debug';

let debug = Debug('risk:app:actions');

export const SERVER = {
  REQUEST: {
    STATE: 'SERVER.REQUESTS.STATE',
    VALID_ACTIONS: 'SERVER.REQUESTS.VALID_ACTIONS',
  },
  RECIEVE: {
    STATE: 'SERVER.RECIEVE.STATE',
    VALID_ACTIONS, 'SERVER.RECIEVE.VALID_ACTIONS',
  },
  ACTIONS: getTypes({
    
  },
}


export const server = {
  request: {
    state() {
      debug(`creating: ${SERVER.REQUESTS.STATE}`);
      return {
        type: SERVER.REQUESTS.STATE,
      };
    },
    validActions() {
      debug(`creating: ${SERVER.REQUESTS.VALID_ACTIONS}`);
      
      return {
        type: SERVER.REQUESTS.VALID_ACTIONS,
      };
    },
  },
};
