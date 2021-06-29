export const checkFilms = (item, getMovies) => {
  if (!localStorage.getItem(item)){
    getMovies();
  }
}

export const searchFilms = (films, keyWord) => {
 return films.filter((el) => {return el.nameRU.toLowerCase().includes(keyWord.toLowerCase())})
}

export const searchShortFilms = (films, keyWord) => {
  return films.filter((el) => {return (el.duration <= 40 && el.nameRU.includes(keyWord))})
}