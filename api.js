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

    return resp;
  });
}

export function get(url) {
  return request(url);
}
