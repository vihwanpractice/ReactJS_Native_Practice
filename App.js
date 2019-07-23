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
      <View style= {styles.buttonContainer}>
        <Button title={'click me!'} onPress={() => this.clickHandler}></Button>
        <Text>{this.state.counter}</Text>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
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
    alignItems: 'center',
  },

  textRed: {
    color: 'red'
  },

  textBig: {
    fontSize : 32,
  },

  buttonContainer: {
    width: '100%',
  }
});
