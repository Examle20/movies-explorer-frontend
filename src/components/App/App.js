import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {Movies} from "../Movies/Movies";
import {SavedMovies} from "../SavedMovies/SavedMovies";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";
import {NotFound} from "../NotFound/NotFound";
import {CurrentUserContext} from "../../contexts/currentUserContext";
import { Route, Switch, withRouter } from 'react-router-dom';
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";
import "./App.css"
import Preloader from "../Preloader/Preloader";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import {Profile} from "../Profile/Profile";
import * as handleMovies from "../../utils/handleMovies"
function App(props) {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isHeaderMain, setIsHeaderMain] = React.useState(false);
  const [isHeaderAndFooter, setIsHeaderAndFooter] = React.useState(true);
  const [isCardDelete, setIsCardDelete] = React.useState(false);
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false);
  const [isFooterOpen, setIsFooterOpen] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSaveMovies] = React.useState([]);
  const [isShortFilms, setIsShortFilms] = React.useState(false);
  const [downloadMovies, setDownloadMovies] = React.useState(0);
  const [isLoader, setIsLoader] = React.useState(false);
  const [moviesNotfound, setMoviesNotFound] = React.useState(false);
  const [errorRequest, setErrorRequest] = React.useState(false);

  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then((res) => {
        props.history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = (email, password) => {
    mainApi.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        props.history.push('/movies');
        localStorage.setItem('authorize', 'true');
      })
      .catch( err => {
        console.log(err);
      })
  }

  const handleTokenCheck = () => {
    mainApi.checkToken().then((res) => {
      if (res){
        setLoggedIn(true)
        props.history.push('/movies')
      }
    })
      .catch(err => {
        console.log(err);
      });
  }

  const handleSignOut = () => {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setMovies([])
        setSaveMovies([])
        localStorage.removeItem('authorize')
        localStorage.removeItem('movies')
      })
      .catch(err => {
        console.log(err)
      });
  }

  const handleUpdateUser = (name, email) => {
    mainApi.editUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch( err => {
        console.log(err);
      })
  }

  const handleNotFoundFilms = (films) => {
    if (films.length === 0) setMoviesNotFound(true)
  }

  const handleGetSavedMovies = () => {
    setIsLoader(true)
    mainApi.getMovies()
      .then((res) => {
        setSaveMovies(res)
        console.log(res)
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        setErrorRequest(true)
        console.log(err)
      })
  }

  const handleSearch = (filmHandler, films, shortFilms) => {
    if(!isShortFilms) {
      filmHandler(films)
    } else {
      filmHandler(shortFilms)
    }
    handleNotFoundFilms(films)
  }

  const handleGetAllMovies = (keyWord) => {
    setIsLoader(true)
    moviesApi.getMovies()
      .then((res) => {
        setErrorRequest(false)
        localStorage.setItem('movies', JSON.stringify(res))
        handleSearch(
          setMovies, handleMovies.searchFilms(JSON.parse(localStorage.getItem('movies')), keyWord),
          handleMovies.searchShortFilms(JSON.parse(localStorage.getItem('movies')), keyWord)
        )
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        console.log(err)
      })
  }

  const handleSearchMovies = (keyWord) => {
    handleGetSavedMovies();
    if(!localStorage.getItem('movies')){
      handleGetAllMovies(keyWord)
    } else {
      handleSearch(
        setMovies, handleMovies.searchFilms(JSON.parse(localStorage.getItem('movies')), keyWord),
        handleMovies.searchShortFilms(JSON.parse(localStorage.getItem('movies')), keyWord)
      )
    }
  }

  const handleSearchSavedMovies = (keyWord) => {
    console.log('поиск')
    handleSearch(
      setSaveMovies, handleMovies.searchFilms(savedMovies, keyWord),
      handleMovies.searchShortFilms(savedMovies, keyWord)
    )
  }

  const handleMovieLike = (movie) => {
    const id = movie.id || movie.movieId;
    const isLiked = (savedMovies.some(i => (i.movieId === id) && ((i.owner === currentUser.id))))
    mainApi.handleLikeMovie(movie, isLiked)
      .then((res) => {
        console.log(res)
        handleGetSavedMovies();
        setMovies((state) => state.map((c) => c.id === movie.movieId ? res : c))
      })
      .catch(err => console.log(err))
  }

  const handleDeleteSavedMovie  = (movie) => {
    mainApi.deleteMovie(movie.movieId)
      .then(() => {
        setSaveMovies((movies) => movies.filter((c) => c.movieId !== movie.movieId))
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  React.useEffect(() => {
    if(localStorage.getItem('authorize')){
      handleTokenCheck();
    }
  },[])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {isHeaderAndFooter &&
        <Header
          loggedIn={loggedIn}
          isHeaderMain={isHeaderMain}
          onNavigationMenu={setIsNavigationMenuOpen}
        />}
        <Switch>
          <Route exact path="/">
            <Main onIsHeaderMain={setIsHeaderMain}/>
          </Route>
          <ProtectedRoute
            component={Movies}
            path="/movies"
            movies={movies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            isCardDelete={isCardDelete}
            onIsCardDelete={setIsCardDelete}
            onSearchMovies={handleSearchMovies}
            onIsSearch={setIsShortFilms}
            onMovieButton={handleMovieLike}
            onSetMovies={setMovies}
            downLoadsMovies={downloadMovies}
            onDownloadMovies={setDownloadMovies}
            isLoader={isLoader}
            moviesNotfound={moviesNotfound}
            errorRequest={errorRequest}
            onErrorRequest={setErrorRequest}
          />
          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            loggedIn={loggedIn}
            isCardDelete={isCardDelete}
            onIsCardDelete={setIsCardDelete}
            onGetSavedMovies={handleGetSavedMovies}
            onSearchMovies={handleSearchSavedMovies}
            onIsSearch={setIsShortFilms}
            movies={savedMovies}
            onMovieButton={handleDeleteSavedMovie}
            downLoadsMovies={downloadMovies}
            onDownloadMovies={setDownloadMovies}
            isLoader={isLoader}
            moviesNotfound={moviesNotfound}
            errorRequest={errorRequest}
            onErrorRequest={setErrorRequest}
          />
          <ProtectedRoute
            component={Profile}
            path="/profile"
            loggedIn={loggedIn}
            onIsFooterOpen={setIsFooterOpen}
            onSignout={handleSignOut}
            onUpdateUser={handleUpdateUser}
          />
          <Route path="/signin">
            <Login
              onHeaderAndFooter={setIsHeaderAndFooter}
              onLogin={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
              onHeaderAndFooter={setIsHeaderAndFooter}
              onRegister={handleRegister}
            />
          </Route>
          <Route path="*">
            <NotFound onIsHeaderAndFooter={setIsHeaderAndFooter}/>
          </Route>
        </Switch>
        {isHeaderAndFooter && isFooterOpen && <Footer/>}
        <NavigationMenu
          isNavigationMenuOpen={isNavigationMenuOpen}
          onNavigationMenu={setIsNavigationMenuOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
