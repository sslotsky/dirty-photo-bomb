import React, { Component } from "react";
import { View, Text } from "react-native";
import notificationService from "./notificationService";

export default class Notice extends Component {
  state = {
    messages: {}
  };

  componentDidMount() {
    this.service = notificationService();
    this.service.subscribe(this.publish);
  }

  componentWillUnmount() {
    this.service.unsubscribe(this.publish);
  }

  publish = (message, id) => {
    this.setState(state => {
      const messages = { ...state.messages, [id]: message };
      return { ...state, messages };
    });

    setTimeout(() => {
      this.setState(state => {
        const newState = { ...state };
        delete newState.messages[id];
        return newState;
      });
    }, 4000);
  };

  render() {
    const messages = Object.values(this.state.messages);

    return (
      messages.length > 0 &&
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
        {messages.map((m, i) => (
          <Text key={`${m}-${i}`} style={{ color: "white" }}>{m}</Text>
        ))}
      </View>
    );
  }
}
