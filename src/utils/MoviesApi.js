class MoviesApi {
  constructor(options) {
    this._options = options;
    this._url = this._options.url;
    this._headers = this._options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Error: ${res.status}: ${res.statusText}`)
    );
  }

  getMovieInfo() {
    return fetch(`${this._url}`, { headers: this._headers })
      .then((res) =>
        this._checkResponse(res)
    );
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
