import React, { Component } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { Card, CardItem, Icon, Body, Right, Left, Text, Button } from 'native-base';
import { UserList, AsyncImage }from '../'
import Collapsible from 'react-native-collapsible';


const Drawers = {
  FORKERS: 0,
  QUESTIONS: 1
}

class EventCard extends Component {
  state = {
    collapsed: true,
    drawer: null,
    openDrawer: null
  };

  render() {
    return (
      <Card>
        <CardItem style={{paddingTop: 7, paddingBottom: 7}} header>
          <Left>
            <Icon name="basketball" style={{fontSize: 40, color: "orange"}} />
            <Body>
              <Text>{this.props.event.title}</Text>
              <Text note>{this.props.event.author}</Text>
            </Body>
          </Left>
          <Right>
            <Text style={{color: "#6693DD"}}>@{this.props.event.locationName}</Text>
            <Text note>6 hours</Text>
          </Right>
        </CardItem>

        <CardItem cardBody>
          <AsyncImage source={{uri: this.props.event.image}} style={styles.cardImage} />
        </CardItem>

        <CardItem footer>
          <Left>
            <Button delayLongPress={250} onLongPress={() => {this.toggleDrawer(Drawers.FORKERS)}} transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button delayLongPress={250} onLongPress={() => {this.toggleDrawer(Drawers.QUESTIONS)}} transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>March 16</Text>
            </Right>
        </CardItem>

        <Collapsible collapsed={this.state.collapsed}>
          {this.renderDrawer()}
        </Collapsible>

      </Card>
    );
  }

  renderDrawer() {
    if(this.state.drawer) {
      return this.state.drawer;
    }
  }

  toggleDrawer(drawer) {
    const forkers = (
      <CardItem style={{flexDirection: "column"}}>
        <UserList users={
          [
            {name: "Yuri Yakymiv", thumbnail: "https://qph.fs.quoracdn.net/main-thumb-225761720-200-dimcdhqeebxqkulffaknaycsxjkljueq.jpeg", hours: 35},
            {name: "Greg Yakymiv", thumbnail: "https://media.licdn.com/dms/image/C4D03AQEejg50aGJjfg/profile-displayphoto-shrink_200_200/0?e=1524384000&v=alpha&t=kcBWR6UmptKa7u7fIj0pja8idN5PFzq7FfPoQIslNIA", hours: 4}
          ]
        } />
      </CardItem>
    );

    const questions = (
      <CardItem style={{flexDirection: "column"}}>
          <Body>
            <Icon name="cog" style={{fontSize: 50, color: "blue"}} />
          </Body>
      </CardItem>
    );

    switch(drawer) {
      case Drawers.FORKERS:
        toOpen = forkers;
        break;
      case Drawers.QUESTIONS:
        toOpen = questions;
        break;
    }

    if(this.state.collapsed) {
      if(drawer == this.state.openDrawer) {
        this.setState({collapsed: false});
      } else {
        this.setState({collapsed: !this.state.collapsed, drawer: toOpen, openDrawer: drawer});
      }
    } else {
      if(drawer == this.state.openDrawer) {
        this.setState({collapsed: true});
      } else {
        this.setState({drawer: toOpen, openDrawer: drawer});
      }
    }
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    height: 200,
    //width: null,

  }
});

export default EventCard;
