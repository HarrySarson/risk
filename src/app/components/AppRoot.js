import {Map} from 'immutable';
import React from 'react/addons';
import Debug from 'debug';
import Actions from '../actions';
import Cart from './Cart';


import config from '../config/app';

var debug = Debug('myApp');

/*
 * @class AppRoot
 * @extends React.Component
 */
class AppRoot extends React.PureComponent {

  /* 
   * @returns {Object} childContext
   */
  getChildContext () {

    // share only actions with childs
    return {
      actions: this.props.actions
    };
  }
  
  /*
   * React element to be rendered.
   *
   * @returns {JSX}
   */
  render () {
    return <div className="appRoot">
      <h1>{config.title}</h1>
      <Cart cart={this.props.state.cart} />
    </div>;
  }
}

// Context types validation
AppRoot.childContextTypes = Component.contextTypes;

// Prop types validation
AppRoot.propTypes = {
  actions: React.PropTypes.instanceOf(Actions).isRequired,
  state: React.PropTypes.instanceOf(Map).isRequired
};

export default AppRoot;



