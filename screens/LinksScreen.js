import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Chats"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
          This Screen will have the list of Chats and the add chat option.
        </Text>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "gold"
  }
});
