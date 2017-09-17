import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { NavigationActions } from "react-navigation";
import { assetPath } from "./api";
import { PLACEHOLDER } from "./constants";

export default function PhotoListItem({ filename, viewPhoto }) {
  return (
    <View style={{ flex: 1 }}>
      {filename !== PLACEHOLDER &&
        <TouchableHighlight onPress={viewPhoto}>
          <Image
            style={{ height: 100, margin: 5 }}
            source={{ uri: assetPath(filename) }}
          />
        </TouchableHighlight>}
    </View>
  );
}
