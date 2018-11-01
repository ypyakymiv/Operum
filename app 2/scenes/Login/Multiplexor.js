import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Button, Text } from 'native-base';

class Multiplexor extends Component {
  constructor(props) {
    super();
    this.state = {
      firstSelected: true,
      blocked: true
    }
  }

  componentDidMount() {
    this.setState({blocked: false});
  }

  buttonOne() {
    const {firstSelected, blocked, animating} = this.state;

    if(firstSelected) {
      return (
        <Button disabled={blocked||animating} transparent={animating} light onPress={this.props.onFirst}>
          <Text>
            {this.props.first}
          </Text>
        </Button>
      );
    } else {
      return (
        <Button disabled={blocked||animating} transparent onPress={() => {this.setState({firstSelected: true, animating: true}, () => {this.props.onChange(true)})}}>
          <Text style={{color: 'white'}}>
            {this.props.first}
          </Text>
        </Button>
      );
    }
  }
  //left == true
  buttonTwo() {
    const {firstSelected, blocked, animating} = this.state;

    if(!firstSelected) {
      return (
        <Button disabled={blocked||animating} transparent={animating} light onPress={this.props.onSecond}>
          <Text>
            {this.props.second}
          </Text>
        </Button>
      );
    } else {
      return (
        <Button disabled={blocked||animating} transparent onPress={() => {this.setState({firstSelected: false, animating: true}, () => this.props.onChange(false))}}>
          <Text style={{color: 'white'}}>
            {this.props.second}
          </Text>
        </Button>
      );
    }
  }

  _onFirstLayout(e) {
    const { width } = e.nativeEvent.layout;
    this.setState({width_f: width});
  }

  _onSecondLayout(e) {
    const { width } = e.nativeEvent.layout;
    this.setState({width_s: width});
  }

  renderAnimation() {
    const {animating, firstSelected, width_f, width_s} = this.state;
    if(animating) {
        return (
          <AnimatedTransition
            widthLeft={width_f}
            widthRight={width_s}
            leftPos={firstSelected}
            animation={
              (a) => {
                a.start(() => this.setState({animating: false}));
              }
            }
          />
        );
    }

  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {this.renderAnimation()}
        <View onLayout={this._onFirstLayout.bind(this)}>
          {this.buttonOne()}
        </View>
        <View onLayout={this._onSecondLayout.bind(this)}>
          {this.buttonTwo()}
        </View>
      </View>
    );
  }
}

class AnimatedTransition extends Component {

  // widthRight, widthLeft, leftPos, animation
  constructor(props) {
    super();
    const { widthLeft, widthRight, leftPos } = props;
    if(!leftPos) {
      this.state = {
        left: new Animated.Value(0),
        right: new Animated.Value(widthRight)
      };
    } else {
      this.state = {
        left: new Animated.Value(widthLeft),
        right: new Animated.Value(0)
      }
    }
  }

  componentDidMount() {
    const { widthLeft, widthRight, leftPos, animation } = this.props;
    if(!leftPos) {
      left = {toValue: widthLeft};
      right = {toValue: 0};
    } else {
      left = {toValue: 0};
      right = {toValue: widthRight};
    }
    animation(
      Animated.parallel([
        Animated.timing(this.state.left, {...left, duration: 100}),
        Animated.timing(this.state.right, {...right, duration: 100})
      ])
    );
  }

  render() {
    const {left, right} = this.state;

    return (
      <Animated.View style={AnimatedStyleSheet.render(left, right)}>
      </Animated.View>
    );
  }
}

class AnimatedStyleSheet {
  static render(left, right) {
    return {
      position: 'absolute',
      left,
      right,
      top: 0,
      bottom: 0,
      backgroundColor: 'white'
    };
  }
}




const styles = StyleSheet.create({
  test: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    backgroundColor: 'white',
  }
});

export default Multiplexor;
