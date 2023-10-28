class MainApi {
  constructor(options) {
    this._options = options;
    this._url = this._options.url;
    this._headers = this._options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Error: ${res.status}: ${res.statusText}`));
  }

  async _request(url, options) {
    const res = await fetch(url, options);
    return this._checkResponse(res);
  }

  getSaveMovies(jwt) {
    return this._request(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  saveMovies(cardData, jwt) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country: cardData.country,
        director: cardData.director,
        duration: cardData.duration,
        year: cardData.year,
        description: cardData.description,
        image: 'https://api.nomoreparties.co/' + cardData.image.url,
        trailerLink: cardData.trailerLink,
        thumbnail:
          'https://api.nomoreparties.co/' +
          cardData.image.formats.thumbnail.url,
        movieId: cardData.id,
        nameRU: cardData.nameRU,
        nameEN: cardData.nameEN,
      }),
    });
  }

  getUserInfo(jwt) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }

  setUserInfo(userData, jwt) {
    return this._request(`${this._url}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: `${userData.name}`,
        email: `${userData.email}`,
      }),
    });
  }

  deleteCard(id, jwt) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
}

export const mainApi = new MainApi({
  // url: 'http://localhost:3001/api',
  url: 'https://domainname.students.nomoredomainsrocks.ru/api', 

  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});