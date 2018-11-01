import React, { Component } from 'react';
import { Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Feed, Map, Profile } from '../scenes';

export default navigator = TabNavigator(
  {
    Feed: { screen: Feed },
    Map: { screen: Map },
    Profile: { screen: Profile }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Map') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = 'basketball';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
