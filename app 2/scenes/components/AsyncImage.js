import React, { Component } from 'react';
import Image from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';

export default class AsyncImage extends Component {
  render() {
    return (
      <Image
        source={this.props.source}
        indicator={ProgressCircle}
        style={this.props.style}
      />
    );
  }
}
