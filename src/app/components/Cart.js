import {Map} from 'immutable';
import React from 'react/addons';
import Debug from 'debug';
import Item from './Item';

var debug = Debug('myApp');

/*
 * React component for shopping cart.
 */
class Cart extends React.PureComponent {
  
  /*
   * Event handler called when `Add item` is clicked.
   */
  onItemAddClick () {
    var title = 'Item ' + Math.random().toString(36).substring(14);
    var price = Math.floor((Math.random() * 100) + 1);

    this.context.actions.addCartItem({
      title: title,
      price: price
    });
  }
  
  /*
   * Render the cart.
   *
   * @returns {JSX} 
   */
  render () {
    <h2>{cart.get('title')}</h2>
      <p>Press the button and check you console. AppRoot and Cart will be re-rendered but only with the new item.</p>
      <button onClick={this.onItemAddClick.bind(this)}>Add item</button>
      <ul>
        {cart.get('items').map(function (item, key) {
          return <Item key={key} item={item} />;
        })}
      </ul>
    </div>;
  }
}

// Prop types validation
Cart.propTypes = {
  cart: React.PropTypes.instanceOf(Map).isRequired,
};

export default Cart;
