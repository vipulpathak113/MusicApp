import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import * as actions from "../actions/index";
import CardList from "../components/CardList";
import SearchText from "../components/SearchText";

import { Card, Text, Button, Icon } from "react-native-elements";

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: "Albums"
  };

  constructor() {
    super();
    this.state = {
      albums: [],
      isFetching: false,
      artist: ""
    };
  }

  searchTracks(artist) {
    this.setState({ albums: [], isFetching: true, artist });
    actions
      .searchTracks(artist)
      .then(albums => this.setState({ albums, isFetching: false }))
      .catch(err => this.setState({ albums: [], isFetching: false }));
  }

  renderBottomNavigation(album) {
    const { artist } = this.state;
    return (
      <View style={styles.icon}>
        <Icon
          onPress={() => {}}
          raised
          name="play"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() =>
            this.props.navigation.navigate("AlbumDetail", { album, artist })
          }
          raised
          name="info"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() => {}}
          raised
          name="thumbs-up"
          type="font-awesome"
          color="#f50"
          size={30}
        />
      </View>
    );
  }

  render() {
    const { albums, isFetching } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchText
          searchArt={search => {
            this.searchTracks(search);
          }}
        />
        {albums.length > 0 && !isFetching && (
          <CardList
            data={albums}
            imageKey={"cover_big"}
            titlekey={"title"}
            buttonText="See the details"
            bottomView={this.renderBottomNavigation.bind(this)}
          />
        )}

        {albums.length === 0 && isFetching && <Text>Loading Album...</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
