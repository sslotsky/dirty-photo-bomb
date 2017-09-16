import React from "react";
import { View, Image } from "react-native";
import { Link } from "react-router-native";
import { assetPath } from "./api";
import { PLACEHOLDER } from "./constants";

export default function PhotoListItem({ filename }) {
  return (
    <View style={{ flex: 1 }}>
      {filename !== PLACEHOLDER &&
        <Link to={`/photos/${filename}`}>
          <Image
            style={{ height: 100, margin: 5 }}
            source={{ uri: assetPath(filename) }}
          />
        </Link>}
    </View>
  );
}
