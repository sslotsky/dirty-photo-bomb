import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PhotoList from "./PhotoList";
import { NativeRouter, Route, Link } from "react-router-native";
import api from "./api";

export default class App extends React.Component {
  state = {
    photos: [],
    error: false
  };

  componentDidMount() {
    api.photos.list().then(({ photos }) => {
      this.setState({ photos });
    });
  }

  render() {
    return (
      <NativeRouter>
        <Route
          path="/"
          exact
          component={() => (
            <View style={styles.container}>
              <PhotoList photos={this.state.photos} />
            </View>
          )}
        />
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
