import React from "react";
import { View, FlatList } from "react-native";
import PhotoListItem from "./PhotoListItem";

export default function PhotoList({ photos }) {
  return (
    <View>
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
