import React, { Component } from 'react';
import SampleState from '../components/SampleState';

export const STATE_SCENE_NAME = 'STATE_SCENE';

export default class StateScreen extends Component {

  static navigationOptions = {
    title: 'State',
  };

  render() {
    return (
      <SampleState />
    );
  }
}
