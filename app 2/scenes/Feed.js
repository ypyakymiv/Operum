import React, { Component } from 'react';
import { Container, Card, CardItem, Body, Left, Right, Text, Content, Icon, Button, Title } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import { fetchFeed } from '../redux/actions';
import { AsyncImage, EventCard } from './components';
import { AppTemplate } from './';

class Feed extends Component {
  eventCards() {
    return (
      <View>
        {
          this.props.feed.map((value) => {
            return (
              <EventCard key={value.title} event={value} />
            );
          })
        }
      </View>
    );
  }

  render() {
    return this.eventCards();
  }
}

class FeedTemplate extends Component {
  render() {
    return (
      <AppTemplate header={<Title>operum</Title>}>
        <Feed feed={this.props.feed} />
      </AppTemplate>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFeed
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedTemplate);
