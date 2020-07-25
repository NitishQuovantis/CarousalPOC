import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/screens';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Home />
      </>
    );
  }
}
