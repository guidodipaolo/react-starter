import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Home from './containers/Home/Home';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/'
            exact
            render={() => <Home />}
        />
        </Switch>
      </Router>
    );
  }
}

export default App;
