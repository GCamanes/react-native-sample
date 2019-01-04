import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Share } from 'react-native';

const imgs = [
  require('../../assets/NY1.jpg'),
  require('../../assets/NY2.jpg'),
  require('../../assets/NY3.jpg'),
];

const INTERVAL_DELAY = 2000;

export default class SampleState extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.startInterval();
  }

  startInterval() {
    setInterval(() => {
      let idx = this.state.currentImage;
      idx = (idx + 1 > imgs.length - 1) ? 0 : idx + 1;

      this.setState({ currentImage: idx });
    }, INTERVAL_DELAY);
  }

  onPressButton() {
    Share.share({
      message: 'Share message',
      title: 'Share Title',
    });
  }

  getImage() {
    return (
      <TouchableHighlight onPress={this.onPressButton}>
        <Image source={imgs[this.state.currentImage]} />
      </TouchableHighlight>
    );
  }

  render() {
    const image = this.getImage();
    return (
      <View>
        {image}
      </View>
    );
  }
}
