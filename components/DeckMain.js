import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class DeckMain extends Component {
  render() {
    return (
      <View>
        <Text>DeckMain</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DeckMain;
