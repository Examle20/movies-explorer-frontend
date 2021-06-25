

export const checkFilms = (item, getMovies) => {
  if (!localStorage.getItem(item)){
    getMovies();
  }
}

export const searchFilms = (item, keyWord) => {
 return JSON.parse(localStorage.getItem(item)).filter((el) => {return el.nameRU.includes(keyWord)})
}

export const searchShortFilms = (item) => {
  return JSON.parse(localStorage.getItem(item)).filter((el) => {return el.duration <= 40})
}