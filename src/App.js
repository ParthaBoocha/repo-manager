import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Body.css';
import Login from './Login';
import Callback from './Callback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Repo Manager</h1>
        </header>
        <p className="App-intro">
          The Repository Manager that GitHub didn't provide!
        </p>
        <div className="Body">
          <Route exact path='/' component={Login} />
          <Route path='/callback' component={Callback} />
        </div>
      </div>
    );
  }
}

export default App;