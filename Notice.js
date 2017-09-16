import React, { Component } from "react";
import { View, Text } from "react-native";
import notificationService from "./notificationService";

const service = notificationService();

export default class Notice extends Component {
  state = {
    message: null
  };

  componentDidMount() {
    service.subscribe(this.publish);
  }

  componentWillUnmount() {
    service.unsubscribe(this.publish);
  }

  publish = message => {
    this.setState({ message });
    setTimeout(() => this.setState({ message: null }), 3000);
  };

  render() {
    const { message } = this.state;

    return (
      message &&
      <View
        style={{
          position: "absolute",
          right: 10,
          top: 50,
          padding: 10,
          zIndex: 1,
          backgroundColor: "#00ff00",
          borderRadius: 5
        }}
      >
        <Text style={{ color: "white" }}>{message}</Text>
      </View>
    );
  }
}
