import React from "react";
import { View, Image, Button } from "react-native";
import Nav from "./Nav";
import api, { assetPath } from "./api";

export default function Photo({ filename, back }) {
  return (
    <View style={{ flex: 1 }}>
      <Nav>
        <Button color="darkmagenta" title="Back" onPress={back} />
        <Button
          color="darkmagenta"
          title="Print"
          onPress={() => api.photos.print(filename)}
        />
      </Nav>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={{ uri: assetPath(filename) }}
      />
    </View>
  );
}
