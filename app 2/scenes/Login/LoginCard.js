import React, { Component } from 'react';
import { Card, Form, CardItem, Left, Title, Input, Item } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Multiplexor from './Multiplexor';
import { CircleImage } from '../components';

class LoginCard extends Component {

  constructor() {
    super();
    this.state = {
      login: true
    }
  }

  renderBody() {
    const {login} = this.state;
    if(login) {
      return this.login();
    }
    else {
      return this.signup();
    }
  }

  signup() {
    return (
      <View>
        <CardItem style={{backgroundColor: 'transparent', paddingBottom: 0}}>
          <Left>
            <Title>Sign up</Title>
          </Left>
        </CardItem>
        <CardItem style={{backgroundColor: 'transparent', paddingBottom: 0}}>
          <Item regular>
            <Input autoCorrect={false} placeholderTextColor={'white'} style={styles.textInput} placeholder={'email'}/>
          </Item>
        </CardItem>
        <CardItem style={{backgroundColor: 'transparent', paddingBottom: 0}}>
          <Item regular>
            <Input autoCorrect={false} placeholderTextColor={'white'} style={styles.textInput} placeholder={'password'}/>
          </Item>
        </CardItem>
        <CardItem style={{backgroundColor: 'transparent', paddingBottom: 0}}>
          <Item regular>
            <Input autoCorrect={false} placeholderTextColor={'white'} style={styles.textInput} placeholder={'confirmation'}/>
          </Item>
        </CardItem>
      </View>
    );
  }

  login() {
    return (
      <View>
        <CardItem style={{backgroundColor: 'transparent', paddingBottom: 0}}>
          <Left>
            <Title>Login</Title>
          </Left>
        </CardItem>
        <CardItem style={{backgroundColor: 'transparent', paddingTop: 0}}>
            <Item regular>
              <Input autoCorrect={false} placeholderTextColor={'white'} style={styles.textInput} placeholder={'email'} />
            </Item>
        </CardItem>
        <CardItem style={{backgroundColor: 'transparent', paddingTop: 0}}>
            <Item regular>
              <Input autoCorrect={false} placeholderTextColor={'white'} style={styles.textInput} placeholder={'password'} />
            </Item>
        </CardItem>
      </View>
    );
  }

  render() {
    return (
      <Card style={styles.mainCard}>
        <Form style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
          {this.renderBody()}
          <CardItem style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center'}}>
            <Multiplexor
              first={'Login'}
              second={'Sign up'}
              onChange={(login) => {this.setState({login})}}
              onSecond={() => {this.props.navigation.navigate('SignUp');}}
            />
          </CardItem>
        </Form>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  mainCard: {
    flex: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    elevation: 0
  },
  textInput: {
    color: 'white'
  }
});

export default withNavigation(LoginCard);
