
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
    NavigatorIOS, Text, View,TouchableHighlight,StyleSheet
 } from "react-native";
import {
  StackNavigator,
} from 'react-navigation';
import DayListView from "./DayListView";

const MainView = () => (
  <View style={styles.container}>
  {<DayListView  style={styles.welcome}/>}
</View>
);

const main = StackNavigator({
  Home: { 
    screen: MainView,
    navigationOptions: {
      headerTitle: 'Hello RN for day N ',
    }
  }
});

export default main;

// ====================== style sheet ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10 ,
    width: 100,
    height: 100
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});