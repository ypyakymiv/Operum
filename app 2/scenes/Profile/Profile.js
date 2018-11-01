import React, { Component } from 'react';
import { Text, Card, CardItem, Body, Thumbnail, Container } from 'native-base';
import { StyleSheet, Dimensions, VirtualizedList } from 'react-native';
import { CircleImage, EventCard } from '../components';
import { AppTemplate } from '../';
import { connect } from 'react-redux';

class Profile extends Component {
  listHeader() {
    const { height, width } = Dimensions.get("window");
    return (
      <Card style={styles.test}>
        <CardItem header style={{height: height * 3 / 8, backgroundColor: "blue"}}>
          <Body style={{justifyContent: "center", alignItems: "center"}}>
            <CircleImage style={{width: 150, height: 150}} source={{uri: "https://pbs.twimg.com/media/CTe3nojUsAEj1Bh.jpg"}} />
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <AppTemplate>
        <VirtualizedList
          ListHeaderComponent={this.listHeader()}
          data={this.props.events}
          renderItem={
            ({item}) => {
              return <EventCard event={item} />;
            }
          }
          keyExtractor={(item, index) => {return item.title}}
          getItemCount={(data) => data.length}
          getItem={(data, index) => data[index]}
        />
      </AppTemplate>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    backgroundColor: "red"
  }
});

function mapStateToProps(state) {
  return {
    events: state.feed
  };
}

export default connect(mapStateToProps, null)(Profile);
