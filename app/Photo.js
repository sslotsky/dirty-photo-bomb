import React from "react";
import { ScrollView, View, Image, Button } from "react-native";
import Nav from "./Nav";
import api, { assetPath } from "./api";
import notificationService from "./notificationService";
import Animated from "./Animated";
import Dock from "./Dock";

const service = notificationService();

export default function Photo({ navigation }) {
  const { filename } = navigation.state.params;
  const print = () => {
    api.photos.print(filename).then(() => {
      service.notify("Your photos will print shortly.");
      navigation.goBack();
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <Animated>
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={{ uri: assetPath(filename) }}
        />
      </Animated>
      <Dock>
        <Button title="Print" onPress={print} />
      </Dock>
    </View>
  );
}
