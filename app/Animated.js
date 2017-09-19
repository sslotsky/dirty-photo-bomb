import React from "react";
import { Animated } from "react-native";

export default class GrowToSize extends React.Component {
  state = {
    size: new Animated.Value(0),
    height: 0,
    width: 0
  };

  componentDidMount() {
    Animated.timing(this.state.size, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  render() {
    let { size } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              scaleY: size
            },
            {
              scaleX: size
            }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
