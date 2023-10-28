export const URL = 'https://domainname.students.nomoredomainsrocks.ru/api';
// export const URL = 'http://localhost:3001/api';

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.text().then((text) => {
    return Promise.reject({
      status: response.status,
      statusText:
        JSON.parse(text).message === 'Validation failed'
          ? JSON.parse(text).validation.body.message
          : JSON.parse(text).message,
    });
  });
};

export async function register(name, email, password) {
  const response = await fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(response);
};

export async function authorize({ email, password }) {
  const response = await fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return checkResponse(response);
};

export const checkToken = async (token) => {
  const response = await fetch(`${URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  return checkResponse(response);
};
