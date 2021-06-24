import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {Movies} from "../Movies/Movies";
import {SavedMovies} from "../SavedMovies/SavedMovies";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";
import {NotFound} from "../NotFound/NotFound";

import { Route, Switch, withRouter } from 'react-router-dom';
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";
import "./App.css"
import Preloader from "../Preloader/Preloader";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/MainApi"
import {Profile} from "../Profile/Profile";

function App(props) {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isHeaderMain, setIsHeaderMain] = React.useState(false)
  const [isHeaderAndFooter, setIsHeaderAndFooter] = React.useState(true)
  const [isCardDelete, setIsCardDelete] = React.useState(false)
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false)
  const [isFooterOpen, setIsFooterOpen] = React.useState(true)

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
      .then((res) => {
        props.history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
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
    auth.checkToken().then((res) => {
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
    auth.signOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('authorize')
      })
      .catch(err => {
        console.log(err)
      });
  }

  React.useEffect(() => {
    if(localStorage.getItem('authorize')) handleTokenCheck();
  },[])

  return (
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
        />
        {/*<Route path="/profile">*/}
        {/*  /!*<Profile onLoggedIn={setLoggedIn} onIsFooterOpen={setIsFooterOpen}/>*!/*/}
        {/*</Route>*/}
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
  );
}

export default withRouter(App);
