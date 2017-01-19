import Debug from 'debug';
import React from 'react';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import store from './store';
import { server } from './store/actions/server'

var debug = Debug('risk:app');


store.dispatch(server.connect());


const Json = ({json}) => 
  <code>{json}</code>;


 
const mapStateToProps = (state) => {
  return {
    json: JSON.stringify(state, null, 2),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const StateJson = connect(
  mapStateToProps,
  mapDispatchToProps
)(Json);

const App = () => 
  <Provider store={store}>
    <StateJson/>
  </Provider>;

store.dispatch(server.connect());

export default App;
  