import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


export default class AddEntry extends Component {
  render() {
    return (
      <View>
        <Text>AddEntry</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
