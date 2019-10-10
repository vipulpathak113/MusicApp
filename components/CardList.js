import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { Card, Text, Button, Icon } from "react-native-elements";

export default class CardList extends React.Component {
  render() {
    const { data, imageKey, titlekey, bottomView } = this.props;

    if (data && data.length > 0) {
      return data.map((item, index) => {
        return (
          <Card
            title={item[titlekey]}
            image={{ uri: item[imageKey] }}
            key={index}
          >
            {bottomView(item)}
          </Card>
        );
      });
    } else {
      return <View></View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
