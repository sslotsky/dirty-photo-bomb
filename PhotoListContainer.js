import React from "react";
import PhotoList from "./PhotoList";
import photoService from "./photoService";

const service = photoService();

export default class PhotoListContainer extends React.Component {
  state = {
    photos: [],
    queued: []
  };

  queue = photos => this.setState({ queued: photos });

  componentDidMount() {
    service.retrieve().then(photos => {
      this.setState({ photos, queued: photos });
      service.subscribe(this.queue);
    });
  }

  refresh = () => this.setState(({ queued }) => ({ photos: queued }));

  componentWillUnmount() {
    service.unsubscribe(this.queue);
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
