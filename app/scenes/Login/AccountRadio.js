import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Thumbnail } from 'native-base';
import { CircleImage } from '../components/';

const worker = require('../../resources/do_service.jpg');
const provider = require('../../resources/provide_service.jpg');

const { width, height } = Dimensions.get('window');
const custom_size = width * 0.3;

class AccountRadio extends Component {


  firstButton() {
    const { firstSelected } = this.props;
    const { selected, notSelected, iconSize } = styles;
    var currentStyle = StyleSheet.flatten([iconSize, firstSelected ? selected : notSelected]);

    return (
      <View style={styles.child}>
        <TouchableOpacity disabled={this.props.firstSelected} onPress={() => {this.props.stateChange(true)}}>
          <CircleImage style={currentStyle} source={worker} />
        </TouchableOpacity>
      </View>
    );
  }

  secondButton() {
    const { firstSelected } = this.props;
    const { selected, notSelected, iconSize } = styles;
    const currentStyle = StyleSheet.flatten([iconSize, !firstSelected ? selected : notSelected]);

    return (
      <View style={styles.child}>
        <TouchableOpacity disabled={!this.props.firstSelected} onPress={() => {this.props.stateChange(false)}}>
          <CircleImage style={currentStyle} source={provider} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.root}>
        {this.firstButton()}
        {this.secondButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  child: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconSize: {
    width: custom_size,
    height: custom_size
  },
  selected: {
    borderWidth: 3,
    borderColor: 'white'
  },
  notSelected: {
    borderWidth: 1,
    borderColor: 'gray'
  }
});

export default AccountRadio;
