class NetworkError {
  constructor(error) {
    this.error = error;
  }
}

function request(url, options = {}) {
  return fetch(url, options).then(resp => {
    if (!resp.ok) {
      throw new NetworkError(resp);
    }

    return resp.json();
  });
}

export function get(url) {
  return request(url);
}

export function post(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

const host = process.env.HOST;
const base = `http://${host}:9999`;
const route = path => `${base}/${path}`;
const apiRoute = path => route(`v1/${path}`);

export const assetPath = filename => route(`photos/${filename}`);

export default {
  photos: {
    list: () => get(apiRoute("photos")),
    print: filename => post(apiRoute(`photos/${filename}/prints`))
  }
};
