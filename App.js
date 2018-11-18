
// ********************  Lets build a React Native app from scratch  **********************

// import ui components (the View and Text components) from react native
// Here we are using an ES 6 destructuring statment in conjunction with an import statement
// instead of importing the entire library, we will use curly brackets to import just these two components
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text, AppRegistry, StatusBar } from 'react-native'

// import the entire react library into a variable called 'React'
import React from 'react'


// image an Image
import picMiniBus from './assets/minibus.jpeg'
import picLoft from './assets/loft.jpg'
import picTech from './assets/tech.jpg'

// create a react Component
// by creating new object called 'App' and that object is an extension of the react component


// type Props = {};
// export default class App extends Component<Props> {


export default class App extends React.Component {
  //at minimum React components need a render method
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={styles.pic} source={picMiniBus}>
          <Text style={styles.userName}>Mini BUUUS</Text>
        </ImageBackground>
        <ImageBackground style={styles.pic} source={picTech}>
          <Text style={styles.userName}>Technology</Text>
        </ImageBackground>
        <ImageBackground style={styles.pic} source={picLoft}>
          <Text style={styles.userName}>Loft</Text>
        </ImageBackground>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userName: {
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,.7)',
    color: 'white',
    padding: 10,
  },
  defaultText: {
    fontSize: 20,
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
