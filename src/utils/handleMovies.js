

export const checkFilms = (item, getMovies) => {
  if (!localStorage.getItem(item)){
    getMovies();
  }
}

export const searchFilms = (item, keyWord) => {
 return JSON.parse(localStorage.getItem(item)).filter((el) => {if(el.nameRU.includes(keyWord)) {return el}})
}

