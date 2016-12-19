import {Map} from 'immutable';
import React from 'react/addons';
import Debug from 'debug';

var debug = Debug('myApp');
/*
 * @class Item
 * @extends React.Component
 */
class Item extends React.PureComponent {

  /*
   * Render the item.
   *
   * @returns {JSX}
   */
  render () {
    var item = this.props.item;

    debug('render <Item/>', item.get('title'));
    
    return <li className="item">{this.props.item.title} - ${this.props.item.price}</li>;
  }
}

// Prop types validation
Item.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default Item;
