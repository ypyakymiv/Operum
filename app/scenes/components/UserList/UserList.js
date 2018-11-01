import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Text, Body, Thumbnail, Left, Right } from 'native-base';

class UserList extends Component {
  // this.props.users = []

  renderRow(user) {
    return (
      <ListItem style={{marginBottom: 7}} avatar>
        <Left>
          <Thumbnail small source={{ uri: user.thumbnail }} />
          <Body>
            <Text>{user.name}</Text>
            <Text note>{user.hours} hours</Text>
          </Body>

        </Left>
      </ListItem>
    );
  }

  render() {
    return (
      <List dataArray={this.props.users}
            renderRow={this.renderRow}>
      </List>
    );
  }

}

export default UserList;
