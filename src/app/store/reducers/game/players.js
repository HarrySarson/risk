import { GAME } from '../actions/game';
import { initialState } from '../../initial-state';

import Immutable from 'immutable';
import Debug from 'debug';

let debug = Debug('risk:app:reducers');


export function players(state = initialState.game.players, action) {
  debug('reducing game.players: ', action);
  
  switch (action.type) {
        
    default:
      return state;
  }
}