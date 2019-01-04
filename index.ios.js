import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigationContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
