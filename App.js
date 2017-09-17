import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import Notice from "./app/Notice";
import PhotoListContainer from "./app/PhotoListContainer";
import Photo from "./app/Photo";
import api from "./app/api";
import { StackNavigator } from "react-navigation";

const Navigator = StackNavigator(
  {
    Home: { screen: PhotoListContainer },
    Photo: { path: "photos/:filename", screen: Photo }
  },
  {
    cardStyle: {
      backgroundColor: "dimgray"
    },
    navigationOptions: {
      title: "Photo Booth",
      headerTitleStyle: {
        color: "white"
      },
      headerStyle: {
        backgroundColor: "darkslategray"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Navigator />
        <Notice />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
