import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SampleAnimation from '../components/SampleAnimation';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  }
});

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <SampleAnimation />
    );
  }
}
