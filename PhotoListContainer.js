import React from "react";
import PhotoList from "./PhotoList";
import api from "./api";

export default class PhotoListContainer extends React.Component {
  state = {
    photos: [],
    queued: []
  };

  componentDidMount() {
    api.photos.list().then(photos => {
      this.setState({ photos, queued: photos });
    });

    this.poll = setInterval(this.check, 5000);
  }

  check = () => {
    api.photos.list().then(photos => {
      this.setState({ queued: photos });
    });
  };

  refresh = () => this.setState(({ queued }) => ({ photos: queued }));

  componentWillUnmount() {
    clearInterval(this.poll);
  }

  render() {
    const { photos, queued } = this.state;

    return (
      <PhotoList
        photos={photos}
        diff={queued.length - photos.length}
        refresh={this.refresh}
      />
    );
  }
}
