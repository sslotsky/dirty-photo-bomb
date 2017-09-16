import React from "react";
import { Animated, Text, View } from "react-native";

export default class GrowToSize extends React.Component {
  state = {
    size: new Animated.Value(0.2)
  };

  componentDidMount() {
    Animated.timing(this.state.size, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    let { size } = this.state;

    return (
      <Animated.View
        style={{
          flex: size
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
