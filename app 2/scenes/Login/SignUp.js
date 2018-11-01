import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground, View } from 'react-native';
import { Container, Card, CardItem,
  Title, Footer, Left, Icon, Content,
  Header, Body, Button, Text, FooterTab } from 'native-base';
import AccountRadio from './AccountRadio';

const background = require('../../resources/signup_background4.jpg');




class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      firstSelected: true
    };
  }

  renderBackButton() {
    return (
      <View style={{margin: 20, alignSelf: 'flex-start'}}>
        <Button transparent onPress={() => {}}>
          <Icon name={'ios-arrow-back'} style={{color: 'white', fontSize: 40}}/>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <ImageBackground source={background} style={styles.background}>
          <View style={[styles.overlay, {opacity: 0.7}]} />


          <Content scrollEnabled={false} contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Card style={[styles.mainCard, {flex: 0}]}>
                <CardItem style={[styles.clearCard, {justifyContent: 'center'}]} header>
                  <Title style={{fontFamily: 'AsparagusSprouts', fontSize: 36}}>
                    I am a ...
                  </Title>
                </CardItem>
                <CardItem style={styles.clearCard}>
                  <AccountRadio
                    stateChange={(firstSelected) => {this.setState({firstSelected})}}
                    firstSelected={this.state.firstSelected}
                  />
                </CardItem>
                <CardItem style={[styles.clearCard, {justifyContent: 'center'}]} footer>
                  <Title style={{fontFamily: 'AsparagusSprouts', fontSize: 36}}>
                    {
                      this.state.firstSelected ? "Volunteer" : "Organizer"
                    }
                  </Title>
                </CardItem>
              </Card>
            </View>
            <View style={{flex: 1}}>
              <Card style={[styles.mainCard, {flex: 0}]}>
                <CardItem style={[styles.clearCard, {justifyContent: 'center'}]} footer>
                  <Button primary>
                    <Text>
                      Continue
                    </Text>
                  </Button>
                </CardItem>
              </Card>
            </View>
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  mainCard: {
    flex: 0,
    //justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    elevation: 0
  },
  clearCard: {
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black'
  }
});

export default SignUp;
