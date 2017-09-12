import React from "react";
import PhotoList from "./PhotoList";
import api from "./api";

export default class PhotoListContainer extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    api.photos.list().then(({ photos }) => {
      this.setState({ photos });
    });
  }

  render() {
    return (
      <PhotoList photos={this.state.photos} />
    );
  }
}
