import React from "react";
import { View, Image } from "react-native";
import { assetPath } from "./api";

export default function Photo({ filename }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={{ uri: assetPath(filename) }}
      />
    </View>
  );
}
