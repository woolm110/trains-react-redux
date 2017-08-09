import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.global.scss';

import rootReducer from 'reducers';
import App from 'components/app/app';
import HomeContainer from 'containers/home-container/home-container';
import AppConstants from 'app.constants';

const history = createBrowserHistory();
const defaultState = {
  home: {
    departureStation: AppConstants.departureStation,
    arrivalStation: AppConstants.arrivalStation
  }
};

/**
 * @todo work out how to disable dev tools in production
 * @type {Store<any>}
 */
const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(
    applyMiddleware(ReduxThunk, routerMiddleware(history))
  )
);

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

