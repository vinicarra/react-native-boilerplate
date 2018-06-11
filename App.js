import React, { Component } from 'react';

import Reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 

import Router from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(Reducers, {}, applyMiddleware(thunk)) }>
        <Router/>
      </Provider>
    );
  }
}
