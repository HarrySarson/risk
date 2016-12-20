
import {REINFORCE, reinforce} from './reinforce';
import {CHANGE_OWNER, changeOwner} from './change-owner';

export const actionTypes = {
  REINFORCE,
  CHANGE_OWNER,
};

export const actionCreators = {
  reinforce,
  changeOwner,
};