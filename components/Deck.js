import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import DeckList from './DeckList';

class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList {...this.props} />
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

export default Deck;
