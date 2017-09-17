import React from "react";
import PhotoList from "./PhotoList";
import photoService from "./photoService";

export default class PhotoListContainer extends React.Component {
  state = {
    photos: [],
    queued: []
  };

  queue = photos => this.setState({ queued: photos });

  componentDidMount() {
    this.service = photoService();
    this.service.retrieve().then(photos => {
      this.setState({ photos, queued: photos });
      this.service.subscribe(this.queue);
    });
  }

  refresh = () => this.setState(({ queued }) => ({ photos: queued }));

  componentWillUnmount() {
    this.service.unsubscribe(this.queue);
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
