
// ********************  Lets build a React Native app from scratch  **********************

// import ui components (the View and Text components) from react native
// Here we are using an ES 6 destructuring statment in conjunction with an import statement
// instead of importing the entire library, we will use curly brackets to import just these two components
import { StyleSheet, View, Text, AppRegistry, StatusBar } from 'react-native'

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
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>Tanner</Text>
        <Text style={styles.defaultText}>Travis</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  defaultText: {
    fontSize: 100,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
    textAlign: 'center',
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  },
});

// first argument is the name of the application that we are registering the component for
// the second argument is an arrow function which returns the "App" component.
// which will be registered as the first component that we see within the sample app.
AppRegistry.registerComponent('SampleApp', () => App)
