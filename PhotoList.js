import React from "react";
import { View, FlatList, Button } from "react-native";
import PhotoListItem from "./PhotoListItem";
import Nav from "./Nav";

export default function PhotoList({ photos, diff, refresh }) {
  return (
    <View style={{ flex: 1 }}>
      <Nav>
        {diff > 0 &&
          <Button onPress={refresh} title={`${diff} photos waiting`} />}
      </Nav>
      <FlatList
        data={photos}
        numColumns={3}
        renderItem={({ item }) => {
          return <PhotoListItem filename={item} />;
        }}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
}
