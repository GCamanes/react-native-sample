import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';

export default class SampleJsx extends Component {

  render() {
    const monComposant = (
      <Image source={require('../../assets/NY1.jpg')} />
    );

    const images = [
      <Image key="1" source={require('../../assets/NY1.jpg')} />,
      <Image key="2" source={require('../../assets/NY2.jpg')} />,
      <Image key="3" source={require('../../assets/NY3.jpg')} />,
      <Image key="4" source={require('../../assets/NY1.jpg')} />,
      <Image key="5" source={require('../../assets/NY2.jpg')} />,
      <Image key="6" source={require('../../assets/NY3.jpg')} />,
    ];

    return (
      <ScrollView horizontal>
        {monComposant}
        {images}
      </ScrollView>
    );
  }
}

