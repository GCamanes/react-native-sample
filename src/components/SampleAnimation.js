import React, { Component } from 'react';
import { Image, Animated, Easing } from 'react-native';

export default class SampleAnimation extends Component {
  constructor(props){
    super(props);

    this.animatedValue = new Animated.Value(0);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount () {
    this.animate()
    this.spin()
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {

    const movingMarginTop = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 500, 0]
    })

    const movingMarginLeft = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 200, 0]
    })

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '0deg']
    })

    return (
      <Animated.View style={{marginTop: movingMarginTop, marginLeft: movingMarginLeft, alignItems: 'center', transform: [{rotate : spin},{rotateX}]}}>
        <Image source={require('../../assets/NY1.jpg')} />
      </Animated.View>
    );
  }
}