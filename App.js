import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter, Route, AndroidBackButton } from "react-router-native";
import PhotoListContainer from "./PhotoListContainer";
import Photo from "./Photo";
import api from "./api";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <AndroidBackButton>
          <View style={styles.container}>
            <Route path="/" exact component={PhotoListContainer} />
            <Route
              path="/photos/:filename"
              component={({ match }) => (
                <Photo filename={match.params.filename} />
              )}
            />
          </View>
        </AndroidBackButton>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
