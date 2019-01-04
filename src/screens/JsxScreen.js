import React, { Component } from 'react';
import SampleJsx from '../components/SampleJsx';

export const JSX_SCENE_NAME = 'JSX_SCENE';

export default class JsxScreen extends Component {

  static navigationOptions = {
    title: 'JSX',
  };

  render() {
    return (
      <SampleJsx />
    );
  }
}
