import React, { Component } from 'react';
import Login from './Login';
import User from './User';
import Admin from './Admin';
import { SwitchNavigator } from 'react-navigation';

const Navigator = SwitchNavigator({
  Login: {
    screen: User
  },
  User: {
    screen: User
  },
  Admin: {
    screen: Admin
  }
}, {lazy: false});

export default Navigator;
