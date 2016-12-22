import { combineReducers } from 'redux';
import { game } from './game';
import { server } from './server';

export default combineReducers({
  server,
});
