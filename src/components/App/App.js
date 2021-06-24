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
import * as mainApi from "../../utils/MainApi"
import {Profile} from "../Profile/Profile";

function App(props) {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isHeaderMain, setIsHeaderMain] = React.useState(false)
  const [isHeaderAndFooter, setIsHeaderAndFooter] = React.useState(true)
  const [isCardDelete, setIsCardDelete] = React.useState(false)
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false)
  const [isFooterOpen, setIsFooterOpen] = React.useState(true)
  const [currentUser, setCurrentUser] = React.useState({});

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
      .then((res) => {
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
        localStorage.removeItem('authorize')
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
    if(localStorage.getItem('authorize')) handleTokenCheck();
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
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            loggedIn={loggedIn}
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
