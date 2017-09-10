import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { get } from "./api";

export default class App extends React.Component {
  state = {
    success: false,
    error: false
  };

  componentDidMount() {
    get("http://10.0.0.235:9999/v1/photos")
      .then(() => {
        this.setState({ success: true });
      })
      .catch(resp => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.success && <Text>Success!</Text>}
        {this.state.error && <Text>Error!</Text>}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
