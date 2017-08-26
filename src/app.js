import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import Counter from './components/Counter'

// create a component
// First step create store for keep reducer and create state in Provider
const App = () => {
  return (
    <Provider store={createStore(reducer)}>
    <View style={styles.container}>
      <Counter/>
    </View>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;

AppRegistry.registerComponent('CounterApp', () => App);
