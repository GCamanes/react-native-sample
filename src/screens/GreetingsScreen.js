import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import GreetingsList from '../components/GreetingsList';

export const GREETINGS_SCENE_NAME = 'GREETINGS_SCENE';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  form: {
    flexDirection: 'row',
  },
  newName: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
  },
  addName: {
    height: 40,
    width: 40,
  },
});

const PLACEHOLDER = 'Ajouter un nom';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Greetings',
  };

  constructor(props) {
    super(props);
    this.state = {
      names: [
        'Rexxar',
        'Jaina',
        'Valeera',
      ],
      newName: PLACEHOLDER,
    };

    this.addName = this.addName.bind(this);
  }

  addName() {
    this.setState({
      names: [this.state.newName, ...this.state.names],
    });
  }

  render() {
    return (

      <View style={styles.constainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.newName}
            onChangeText={text => this.setState({ newName: text })}
          />
          <Button
            style={styles.addName}
            onPress={this.addName}
            title="Add"
          />
        </View>
        <GreetingsList names={this.state.names} />
      </View>

    );
  }
}
