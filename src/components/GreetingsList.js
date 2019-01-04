import React, { Component, PropTypes } from 'react';
import { View, Alert } from 'react-native';
import Greeting from './Greeting';
import _ from 'lodash';

export default class GreetingsList extends Component {

  handleFunction(param) {
    Alert.alert(`Received: ${JSON.stringify(param)}`);
  }

  render() {
    const greetings = _.map(this.props.names, name => (<Greeting key={name} name={name} handleFunction={this.handleFunction} />));

    return (
      <View style={{ alignItems: 'center' }}>
        {greetings}
      </View>
    );
  }
}

GreetingsList.defaultProps = {
  names: [],
};

GreetingsList.propType = {
  names: PropTypes.arrayOf(PropTypes.string).required,
};
