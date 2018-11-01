import React, { Component } from 'react';
import { Image } from 'react-native';

class CircleImage extends Component {
  render() {
    return (
      <Image source={this.props.source} style={[this.props.style, {borderRadius: this.props.style.height / 2}]} />
    );
  }
}

export default CircleImage;
