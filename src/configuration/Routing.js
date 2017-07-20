import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => (<div><h1>Hello World</h1></div>)} />
    </Switch>
  </Router>
);