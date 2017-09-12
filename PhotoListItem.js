import React from "react";
import { View, Image } from "react-native";
import { assetPath } from "./api";

export default function PhotoListItem({ filename }) {
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, margin: 5 }}
        source={{ uri: assetPath(filename) }}
      />
    </View>
  );
}