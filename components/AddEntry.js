import React, {Component} from "react";
import { Text, KeyboardAvoidingView, Keyboard } from "react-native";
import {
  Button,
  Card,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { saveDeckTitle } from "../utils/api";
import { purple } from '../utils/colors';

export default class AddEntry extends Component {
  state = {
    titleText: "",
    errorMessage: false
  };

  handleSubmit = () => {
    if (this.state.titleText) {
      const { titleText } = this.state;
      saveDeckTitle(titleText);
      this.setState({
        errorMessage: false,
        titleText: ""
      });
      this.props.navigation.navigate(
        "Deck",
        {
          entryId: titleText,
          navTitle: titleText
        },
        Keyboard.dismiss()
      );
    } else {
      this.setState({ errorMessage: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
        behavior="padding"
      >
        <Card title="Please give the title of your new deck?">
          <FormInput
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
          />
          <FormValidationMessage>
            {this.state.errorMessage ? "This field is required" : ""}
          </FormValidationMessage>
          <Button
            title="Create Deck"
            raised
            backgroundColor={purple}
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}
