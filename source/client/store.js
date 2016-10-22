import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import { sortParamsReducer } from './reducers/todo'
import { routerReducer } from 'react-router-redux';
import actionTypeMiddleware from 'utils/redux/actionTypeMiddleware';

import DevTools from './containers/DevTools'

const rootReducer = combineReducers(
  Object.assign(
    {},
    reducers,
    { routing: routerReducer,
      sortParams: sortParamsReducer },
  )
);

const configureStore = (initialState = {}) => {
  const store = compose(
    applyMiddleware(
      actionTypeMiddleware,
      thunkMiddleware
    ),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
      }
    );
  }

  return store;
};

let initStore = {
  sortParams: {
    sortField: 'text',
    direction: 'ascending'
  }
}

const store = configureStore(window.__INITIAL_STATE__ || initStore);

export default store;
