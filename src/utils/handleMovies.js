

export const checkFilms = (item, getMovies) => {
  if (!localStorage.getItem(item)){
    getMovies();
  }
}

export const searchFilms = (films, keyWord) => {
 return films.filter((el) => {return el.nameRU.includes(keyWord)})
}

export const searchShortFilms = (films, keyWord) => {
  return films.filter((el) => {return (el.duration <= 40 && el.nameRU.includes(keyWord))})
}

// JSON.parse(localStorage.getItem('movies'))