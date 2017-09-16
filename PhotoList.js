import React from "react";
import { View, FlatList, Button } from "react-native";
import PhotoListItem from "./PhotoListItem";
import Nav from "./Nav";
import { PLACEHOLDER } from "./constants";

const COLUMNS = 3;

export default function PhotoList({ photos, diff, refresh }) {
  const remainder = photos.length % COLUMNS;
  const items = remainder === 0
    ? photos
    : photos.concat(Array(COLUMNS - remainder).fill(PLACEHOLDER));

  return (
    <View style={{ flex: 1 }}>
      <Nav>
        {diff > 0 &&
          <Button onPress={refresh} title={`${diff} photos waiting`} />}
      </Nav>
      <FlatList
        data={items}
        numColumns={COLUMNS}
        onRefresh={refresh}
        refreshing={false}
        renderItem={({ item }) => {
          return <PhotoListItem filename={item} />;
        }}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
}
