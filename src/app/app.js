import Debug from 'debug';

import store from './store';
import { server } from './store/actions/server'

var debug = Debug('myApp');


store.dispatch(server.connect());

