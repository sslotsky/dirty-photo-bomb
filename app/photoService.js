import api from "./api";
import createService from "./service";

let photoService = null;

export const MORE = "photos/MORE";
export const INCOMING = "photos/INCOMING";

export default function service() {
  if (!photoService) {
    const s = createService();

    let photos = [];
    const fetch = () =>
      api.photos.list().then(result => {
        photos = result;
        return result;
      });

    const retrieve = () => {
      if (photos.length) {
        return Promise.resolve(photos);
      }

      return fetch();
    };

    photoService = { ...s, retrieve };

    setInterval(() => {
      fetch().then(photoService.notify);
    }, 10000);
  }

  return photoService;
}
