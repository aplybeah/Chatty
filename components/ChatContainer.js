import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class ChatContainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          This is a sample of what each chat should look like when rendered in
          the menu.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: "bold"
  }
});
export default ChatContainer;
