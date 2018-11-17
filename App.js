/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });




// ********************  Commented out above code; Lets build a React Native app from scratch  **********************

// import ui components (the View and Text components) from react native
// Here we are using an ES 6 destructuring statment in conjunction with an import statement
// instead of importing the entire library, we will use curly brackets to import just these two components
import { View, Text, AppRegistry, StatusBar } from 'react-native'

// import the entire react library into a variable called 'React'
import React from 'react'

// create a react Component
// by creating new object called 'App' and that object is an extension of the react component


// type Props = {};
// export default class App extends Component<Props> {


export default class App extends React.Component {
  //at minimum React components need a render method
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Sierra</Text>
        <Text>Tanner</Text>
        <Text>Travis</Text>
      </View>
    );
  }
}

// first argument is the name of the application that we are registering the component for
// the second argument is an arrow function which returns the "App" component.
// which will be registered as the first component that we see within the sample app.
AppRegistry.registerComponent('SampleApp', () => App)
