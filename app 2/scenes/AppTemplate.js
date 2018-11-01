import React, { Component } from 'react';
import { View } from 'react-native';
import { Root, Header, Left, Body, Right, Container, Content, Title } from 'native-base';


class CustomHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
        </Left>
        <Body>
          <Title>
            operum
          </Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

class AppTemplate extends Component {
  render() {
    return (
      <Container>
        <CustomHeader/>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default AppTemplate;
