import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component{
  state = {
    counter: 0,
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render(){
    return (
      <View>
        <Text style={styles.Text}>Hello, world!</Text>
        <Text style={[styles.textBig, styles.textRed]}>Hello, World!</Text>
        <Button title={'click me!'} onPress={() => this.clickHandler}></Button>
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}



export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <CounterButton/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textRed: {
    color: 'red'
  },

  textBig: {

    fontSize : 32,
  }
});
