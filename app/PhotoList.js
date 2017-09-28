import React from "react";
import { View, FlatList } from "react-native";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Dock from "./Dock";
import { PLACEHOLDER } from "./constants";

const COLUMNS = 3;

export default function PhotoList({ photos, refresh, diff, viewPhoto }) {
  const remainder = photos.length % COLUMNS;
  const items = remainder === 0
    ? photos
    : photos.concat(Array(COLUMNS - remainder).fill(PLACEHOLDER));

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        numColumns={COLUMNS}
        onRefresh={refresh}
        refreshing={false}
        renderItem={({ item }) => {
          return (
            <PhotoListItem
              filename={item.thumbnail}
              viewPhoto={() => viewPhoto(item)}
            />
          );
        }}
        keyExtractor={(_, index) => index}
      />
      <Dock>
        {diff > 0 &&
          <Button onPress={refresh} title={`${diff} photos waiting`} />}
      </Dock>
    </View>
  );
}
