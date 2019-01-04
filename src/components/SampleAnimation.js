import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class SampleAnimation extends Component {

  render() {

    return (
      <View>
        <Image source={require('../../assets/NY1.jpg')} />
      </View>
    );
  }
}