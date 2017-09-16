import React from "react";
import { View, Text } from "react-native";

export default function Nav({ children }) {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "#2f4f4f"
      }}
    >
      <Text style={{ color: "white" }}>Photo Booth</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {children}
      </View>
    </View>
  );
}
