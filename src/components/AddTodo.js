import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput,Button,Image } from 'react-native';
import {RkTheme,RkButton,RkCard,RkTextInput} from 'react-native-ui-kitten';
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#223388'
  }
});

RkTheme.setType('RkButton', 'dark', {
  backgroundColor: 'gray',
  borderRadius: 20,
});

 RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  width: 46,
  borderRadius: 25
});

RkTheme.setType('RkTextInput', 'frame', {
  input: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginHorizontal: 0,
    borderRadius: 20,
  },
  color: 'gray',
  backgroundColor: 'gray',
  borderRadius: 0,
  container: {
    paddingHorizontal: 20
  }
});

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleClick() {
     const { addTodo } = this.props;
     addTodo(this.state.text);
  }

  handleSwitchScreen(){
     alert('aaaaaaaaa');
  }

  render() {
    
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={this.handleClick.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <RkButton rkType='dark'>SUBMIT</RkButton>
        <RkButton rkType='dark icon' style={{marginLeft: 20}}>
           <Text>+</Text>
        </RkButton>
        <RkButton
          style={{backgroundColor: 'red'}}
          contentStyle={{color: 'white'}}
          onPress={this.handleSwitchScreen.bind(this)}>
          Click Me
        </RkButton>

        <RkCard>
          <View rkCardHeader>
            <Text>Header</Text>
          </View>
          <Image rkCardImg source={require('../images/load.png')}/>
          <View rkCardContent>
            <Text> quick brown fox jumps over the lazy dog</Text>
          </View>
          <View rkCardFooter>
            <Text>Footer</Text>
          </View>
        </RkCard>

        <RkTextInput rkType='frame'/>
      </View>
    );
  }
}
