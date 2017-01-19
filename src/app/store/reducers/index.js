import { combineReducers } from 'redux-immutable';
import { game } from './game';
import { server } from './server';

export default combineReducers({
  server,
});
