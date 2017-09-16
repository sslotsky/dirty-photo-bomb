import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { NativeRouter, Route, AndroidBackButton } from "react-router-native";
import Notice from "./Notice";
import PhotoListContainer from "./PhotoListContainer";
import Photo from "./Photo";
import api from "./api";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <AndroidBackButton>
          <View style={styles.container}>
            <StatusBar hidden />
            <Route path="/" exact component={PhotoListContainer} />
            <Route
              path="/photos/:filename"
              component={({ match, history }) => (
                <Photo back={history.goBack} filename={match.params.filename} />
              )}
            />
            <Notice />
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
