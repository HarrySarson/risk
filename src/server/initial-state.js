let JSON5 = require('json5');
let fs = require('fs');
let path = require('path');

let boardPath = path.join(__dirname, 'data/board.json');

let board = JSON5.parse(fs.readFileSync(boardPath, 'utf8'));


import _ from 'lodash';
import Immutable from 'immutable';
import Debug from 'debug';
import {inspect} from 'util';

const debug = Debug('risk:server:state');

const objectSet = (obj, key, value) => (obj[key] = value, obj);

const jsState = {
  players: [],
  territories:
    Object.keys(board.territories).reduce(
      (acc, territory) => objectSet(
        acc,
        territory, 
        {
          owner: 0,
          troopCount: 0,
        },
      ), 
      {},
    ),
};

export const initialState = Immutable.fromJS(jsState);

debug(`created initial state: ${inspect(initialState)}`);
