/**
 * @format
 */
// import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {View, Text} from 'react-native'
import App from './navigation/App'
// import App from './App';


AppRegistry.registerComponent(appName, () => App);
