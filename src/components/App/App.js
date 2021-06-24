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
          component={SavedMovies}
          path="/profile"
          loggedIn={loggedIn}
        />
        {/*<Route path="/profile">*/}
        {/*  /!*<Profile onLoggedIn={setLoggedIn} onIsFooterOpen={setIsFooterOpen}/>*!/*/}
        {/*</Route>*/}
        <Route path="/signin">
          <Login onHeaderAndFooter={setIsHeaderAndFooter}/>
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
