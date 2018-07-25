import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './redux/rootReducer';

import AppLayout from './components/AppLayout';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppLayout />
        </Router>
      </Provider>
    );
  }
}

export default App;
