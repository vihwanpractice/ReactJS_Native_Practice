import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component{

  static defaultProps = {
    counter: -1,
  };

  constructor(props){
    super(props);
    this.state = {
      counter: props.counter,
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render(){
    return (
      <View>
        {/* <Text style={styles.Text}>Hello, world!</Text>
        <Text style={[styles.textBig, styles.textRed]}>Hello, World!</Text> */}
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
        <CounterButton counter={0}/>
        <CounterButton count={1}/>
        <CounterButton counter={2}/>
        <CounterButton counter={3}/>
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