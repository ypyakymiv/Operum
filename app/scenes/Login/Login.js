import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Dimensions, StatusBar, Animated, View } from 'react-native';
import { Container, Content, Card, CardItem, Title, Form, Item, Input, Label, Left } from 'native-base';
import LoginCard from './LoginCard';

const background = require('../../resources/login_background.jpg');

class AnimatedLoginCard extends Component {
  constructor(props) {
    super();
    this.state = {
      measured: null
    }
  }

  measure(e) {
    const { y, height } = e.nativeEvent.layout;
    this.setState({measured: new Animated.Value(-y - height)}, () => {
      this.props.onReady(this.state.measured);
    });
  }

  renderCard() {
    if(this.state.measured) {
      return (
        <Animated.View style={{transform: [{translateY: this.state.measured}]}}>
          <LoginCard {...this.props} />
        </Animated.View>
      );
    } else {
      return (
        <View style={{opacity: 0}} onLayout={this.measure.bind(this)}>
          <LoginCard {...this.props} />
        </View>
      );
    }
  }

  render() {
    return this.renderCard();
  }

}


class Login extends Component {

  constructor(props) {
    super();
    this.state = {
      opacity: new Animated.Value(0)
    }
  }

  onReady(offset) {
    Animated.parallel([
      Animated.spring(offset, {toValue: 0, duration: 1000}),
      Animated.spring(this.state.opacity, {toValue: 0.7, duration: 1000})
    ]).start();
  }

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <ImageBackground source={background} style={styles.background}>
          <Animated.View style={[styles.overlay, {opacity: this.state.opacity}]}>
          </Animated.View>

          <Content scrollEnabled={false} contentContainerStyle={styles.containerStyle}>
            <AnimatedLoginCard onReady={this.onReady.bind(this)} />
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
    justifyContent: 'flex-end'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black'
  },
  containerStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export default Login;
