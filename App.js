import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PhotoList from "./PhotoList";
import api from "./api";

const host = "http://10.0.0.235:9999";

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
      <View style={styles.container}>
        <PhotoList photos={this.state.photos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
