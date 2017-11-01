
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
    NavigatorIOS, Text, View,TouchableHighlight,StyleSheet
 } from "react-native";


 export default class NavigatorIOSApp extends Component {
    render() {
      return (
        <NavigatorIOS
          initialRoute={{
            component: MainView,
            title: 'Hello RN for day N ',
            // navigationBarHidden:true,
          }}
          style={{flex: 1}}
        />
      );
    }
  }

 class MainView extends Component {
    render() {
        return (
          <View style={styles.container}>
            <TouchableHighlight>
              <Text > Hello, RN</Text>
            </TouchableHighlight> 
          </View>
        );
    }
 }

// ====================== style sheet ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});