export const BASE_URL = 'http://localhost:3001';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else{
        return res.json();
      }
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      }
    })
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else{
        return res;
      }
    })
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      }
    })
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const editUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const saveMovie = (params) => {
  const image = "https://api.nomoreparties.co" + params.image.url
  const thumbnail = "https://api.nomoreparties.co" + params.image.formats.thumbnail.url
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: params.country,
      director: params.director,
      duration: params.duration,
      year: params.year,
      description: params.description,
      image: image,
      trailer: params.trailerLink,
      nameRU: params.nameRU,
      nameEN: params.nameEN,
      thumbnail: thumbnail,
      movieId: params.id
    })
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else{
        return res;
      }
    })
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};