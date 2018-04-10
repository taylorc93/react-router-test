import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root'),
);
