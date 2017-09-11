import React from "react";
import { FlatList } from "react-native";
import PhotoListItem from "./PhotoListItem";

export default function PhotoList({ photos }) {
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => {
        return <PhotoListItem filename={item} />;
      }}
      keyExtractor={(_, index) => index}
    />
  );
}
