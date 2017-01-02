import React from 'react';
import { render } from 'react-dom';

// Import Components
import App from './components/App';
import Table from './components/Table';
import List from './components/List';
import Edit from './components/Edit';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Table}></IndexRoute>
        <Route path="/details/:id" component={List}></Route>
        <Route path="/edit/:id" component={Edit}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));