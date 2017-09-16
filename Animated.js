import React from "react";
import { Animated, Text, View } from "react-native";

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}