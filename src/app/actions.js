import {CART} from './const';

var debug = require('debug')('myApp:actions');

/*
 * @class Actions
 */
class Actions {

  /*
   * Create a new Actions class.
   *
   * @param {Object} dispatcher A flux dispatcher.
   * @param {Store} store Store to manage the actions of.
   */
  constructor (dispatcher, store) {
    this.dispatcher = dispatcher;
    this.store = store;
  }

  /*
   * @method addCartItem
   * @param {Object} item
   */
  addCartItem (item) {
    debug('CART.ITEM_ADD', item);

    this.dispatcher.dispatch({
      actionType: CART.ITEM_ADD,
      item: item
    });
  }
}

export default Actions;