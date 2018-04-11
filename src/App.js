import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Box, Text } from "gestalt";
import "gestalt/dist/gestalt.css";
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
        <header>
          <Box color="darkGray" height={40} alignItems="center" direction="row" display="flex">
            <Box paddingX={1}>
              <img src={logo} className="App-logo" alt="logo" />
            </Box>
            <Box paddingX={1}>
              <Text bold color="white">Repo Manager</Text>
            </Box>
            <Box paddingX={3} flex="grow">
              <NavLink to='/repos' className='Nav-Link' activeClassName='Nav-Link-Active'>Repos</NavLink>
              <Logout />
            </Box>
          </Box>
        </header>
        <Text align="center">The Repository Manager that GitHub didn't provide!</Text>
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