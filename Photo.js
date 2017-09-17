import React from "react";
import { View, Image, Button } from "react-native";
import Nav from "./Nav";
import api, { assetPath } from "./api";
import notificationService from "./notificationService";
import Animated from "./Animated";

const service = notificationService();

export default function Photo({ filename, back }) {
  const print = () => {
    api.photos.print(filename).then(() => {
      service.notify("Your photos will print shortly.");
      back();
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "dimgray",
        justifyContent: "space-between"
      }}
    >
      <Nav>
        <Button color="darkmagenta" title="Back" onPress={back} />
        <Button color="darkmagenta" title="Print" onPress={print} />
      </Nav>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Animated>
          <Image
            resizeMode="contain"
            style={{ flex: 1 }}
            source={{ uri: assetPath(filename) }}
          />
        </Animated>
      </View>
    </View>
  );
}
