import React from 'react/addons';
import Debug from 'debug';
import Flux from 'flux';


import Actions from './actions';
import Store from './store';

import AppRoot from './components/AppRoot';
import {CHANGE} from './const';

var debug = Debug('myApp');

/*
 * @class App
 */
class App {

  /*
   * Create new app. 
   *
   * @param {Object} options Options object.
   * @param {Object} options.state State for the new app.
   */
  constructor(options) {
    debug('create app with options', options);
    
    let dispatcher = new Flux.Dispatcher();

    this.store = new Store(dispatcher, options.state);
    this.actions = new Actions(dispatcher, this.store);
    this.element = null;

    this.store.on(CHANGE, this.render.bind(this));

  }

  /*
   * Render the app to a DOM element if provided, 
   * otherwise renders to a string which is returned.
   *
   * @param {DOM} [element] Element to render to.
   * @returns {String|undefined} If `element` is not 
   * provided then rendered string is returned.
   */
   render (element) {

    debug('render app with state', this.state);

    let appRootElement = <AppRoot state={this.state} />
    

    // render to DOM
    if (element != null) {
      debug('render to DOM');
      React.render(appRootElement, element);
      return;
    }

    // render to string
    debug('render to string');
    return React.renderToString(appRootElement);
  }

  /*
   * Render the app to the DOM.
   *
   * @param {DOM} element Element to render to.
   */
   renderToDOM (element) {
    if(!element) {
      return debug(new Error('App.renderToDOM: element is required'));
    }

    this.render(element);
   }

  /*
   * Render the app to a string.
   * 
   * @returns {String} Rendered string.
   */
   renderToString () {
    return this.render();
  }
  
   /*
   * Get the state of this app.
   *
   * @returns {Immutable.map}
   */
   getState () {
    return this.store.state;
   }
}

export default App;
