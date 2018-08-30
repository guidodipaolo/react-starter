import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.svg';

import './Home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  test: state.test,
});

const mapDispatchToProps = (dispatch) => {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
