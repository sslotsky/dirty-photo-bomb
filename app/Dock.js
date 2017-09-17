import React from "react";
import { View, StyleSheet } from "react-native";

const dockStyle = StyleSheet.create({
  dock: {
    position: "absolute",
    top: 20,
    right: 20
  }
});

export default function Dock({ style = {}, children }) {
  return (
    <View style={[dockStyle.dock, style]}>
      {children}
    </View>
  );
}
