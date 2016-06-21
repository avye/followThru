// @flow
// import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  )
};
