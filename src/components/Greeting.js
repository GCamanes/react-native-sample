import React, { Component, PropTypes } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class Greeting extends Component {
  render() {
    return (

      <View>
        <Text>Hello {this.props.name}!</Text>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              this.props.handleFunction({
                name: this.props.name,
              });
            }}
            title="Click me"
          />
        </View>
      </View>
    );
  }
}

Greeting.defaultProps = {
  name: 'Default value',
};

Greeting.propType = {
  name: PropTypes.string,
  handleFunction: PropTypes.func.required,
};
