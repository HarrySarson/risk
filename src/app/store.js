import {EventEmitter} from 'events';
import Immutable from 'immutable';
import Debug from 'debug';
import _ from 'lodash';

import {CHANGE, CART} from './const';

var debug = Debug('myApp:store');

/*
 * @class Store
 */
class Store extends EventEmitter {

  /*
   * Create a new Store.
   *
   * @param {Object} dispatcher A flux dispatcher.
   * @param {Object} [state] State to assign the store.
   */
  constructor (dispatcher, state) {
    super();

    if (!dispatcher) {
      debug(new Error('Store: dispatcher is required'));
    }

    if (state) {
      debug('app is created with initial state', state);
    }

    state = state || {};
    state = _.merge({}, Store.defaultState, state);

    // Register handlers
    dispatcher.register(action => {
      if (action.actionType === CART.ITEM_ADD) {
        
        debug('item add', item);

        var immutableItem = Immutable.fromJS(item);

        this.state = this.state.updateIn(['cart', 'items'], items => items.push(immutableItem));
    
        this.emit(CHANGE);
      }
    });

    debug('store is loaded with state', state);

    // Turn state to immutable
    this.state = Immutable.fromJS(state);
  }

  /*
   * @returns {Immutable.Map} - state
   */
  getState () {
    return this.state;
  }

  /*
   * @method onItemAdd
   * @param {Object} item
   */
  onItemAdd (item) {
    throw 99;
  }
}

// Default state
Store.defaultState = {
  cart: {
    title: null,
    items: []
  }
};

export default Store;