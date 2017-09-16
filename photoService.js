import api from "./api";

let photoService = null;

export default function service() {
  if (!photoService) {
    const listeners = [];
    const subscribe = listener => listeners.push(listener);
    const unsubscribe = listener =>
      listeners.splice(listeners.indexOf(listener), 1);

    let photos = [];
    const fetch = () => api.photos.list().then(result => {
      photos = result;
      return result;
    });

    const retrieve = () => {
      if (photos.length) {
        return Promise.resolve(photos);
      }

      return fetch();
    };

    photoService = { subscribe, unsubscribe, retrieve };

    setInterval(() => {
      fetch().then(photos => listeners.forEach(l => l(photos)));
    }, 5000);
  }

  return photoService;
}
