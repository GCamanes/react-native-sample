import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen, { HOME_SCENE_NAME } from './screens/HomeScreen';
import JsxScreen, { JSX_SCENE_NAME } from './screens/JsxScreen';
import GreetingsScreen, { GREETINGS_SCENE_NAME } from './screens/GreetingsScreen';
import StateScreen, { STATE_SCENE_NAME } from './screens/StateScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[HOME_SCENE_NAME] = {
  screen: HomeScreen,
};

stackNavigatorConfig[GREETINGS_SCENE_NAME] = {
  screen: GreetingsScreen,
};

stackNavigatorConfig[JSX_SCENE_NAME] = {
  screen: JsxScreen,
};

stackNavigatorConfig[STATE_SCENE_NAME] = {
  screen: StateScreen,
};

const ApplicationNavigator = StackNavigator(stackNavigatorConfig, {
  initialRouteName: HOME_SCENE_NAME,
});

export default () => <ApplicationNavigator />;

