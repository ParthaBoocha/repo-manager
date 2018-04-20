import React, { Component } from 'react';
import { Text } from "gestalt";
import "gestalt/dist/gestalt.css";
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Text align="center">The Repository Manager that GitHub didn't provide!</Text>
        <Content />
      </div>
    );
  }
}

export default App;