import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GitHub Repo Manager</h1>
        </header>
        <p className="App-intro">
          The Repository Manager that GitHub didn't provide!
        </p>
        <LoginButton />
      </div>
    );
  }
}

export default App;
