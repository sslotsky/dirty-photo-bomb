import React from "react";
import { View, Image, Button } from "react-native";
import api, { assetPath } from "./api";

export default function Photo({ filename, back }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 50,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Button title="Back" onPress={back} />
        <Button title="Print" onPress={() => api.photos.print(filename)} />
      </View>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={{ uri: assetPath(filename) }}
        />
      </View>
    </View>
  );
}
