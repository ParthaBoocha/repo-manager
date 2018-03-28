import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Body.css';
import Login from './Login';
import Callback from './Callback';
import AuthenticatedRoute from "./AuthenticatedRoute";
import Repos from './Repos';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Repo Manager</h1>
          <NavLink to='/repos' className='Nav-Link' activeClassName='Nav-Link-Active'>Repos</NavLink>
          <Logout />
        </header>
        <p className="App-intro">
          The Repository Manager that GitHub didn't provide!
        </p>
        <div className="Body">
          <AuthenticatedRoute exact path='/' component={Repos} />
          <Route exact path='/login' component={Login} />
          <Route path='/callback' component={Callback} />
          <AuthenticatedRoute path='/repos' component={Repos} />
        </div>
      </div>
    );
  }
}

export default App;