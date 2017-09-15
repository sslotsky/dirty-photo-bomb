import React from "react";
import { View } from "react-native";

export default function Nav({ children }) {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      {children}
    </View>
  );
}
