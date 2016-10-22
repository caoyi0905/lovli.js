import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import App from './components/App';

// Sync routing history with redux store
const history = syncHistoryWithStore(browserHistory, store);

// Route configuration
export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);
