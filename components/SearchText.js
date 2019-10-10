import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default class SearchText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  updateSearch(search) {
    this.setState({ search });
  }

  submitSearch() {
    this.props.searchArt(this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search an artist"
          onChangeText={text => {
            this.updateSearch(text);
          }}
          onPressCancel={() => {
            this.updateSearch("");
          }}
          onPress={() => this.submitSearch()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
