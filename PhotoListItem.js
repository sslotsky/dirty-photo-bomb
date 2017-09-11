import React from "react";
import { View, Image } from "react-native";
import { assetPath } from "./api";

export default function PhotoListItem({ filename }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginBottom: 20
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: assetPath(filename) }}
      />
    </View>
  );
}
