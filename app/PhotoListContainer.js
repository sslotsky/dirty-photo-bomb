import React from "react";
import PhotoList from "./PhotoList";
import photoService from "./photoService";

export default class PhotoListContainer extends React.Component {
  state = {
    photos: [],
    queued: []
  };

  componentDidMount() {
    this.service = photoService();
    this.refresh();
    this.service.subscribe(this.listen);
  }

  componentWillUnmount() {
    this.service.unsubscribe(this.listen);
  }

  refresh = () => {
    this.service
      .retrieve()
      .then(photos => this.setState({ photos, queued: photos }));
  };

  listen = photos => {
    this.setState({ queued: photos });
  };

  render() {
    const { photos, queued } = this.state;
    const { navigation } = this.props;
    const viewPhoto = ({ filename }) =>
      navigation.navigate("Photo", { filename });

    return (
      <PhotoList
        photos={photos}
        refresh={this.refresh}
        viewPhoto={viewPhoto}
        diff={queued.length - photos.length}
      />
    );
  }
}
