import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";
import {Movies} from "../Movies/Movies";
import {SavedMovies} from "../SavedMovies/SavedMovies";
import {Profile} from "../Profile/Profile";
import {EntryForm} from "../EntryForm/EntryForm";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";
import {NotFound} from "../NotFound/NotFound";
import { Route, Switch } from 'react-router-dom';
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isHeaderMain, setIsHeaderMain] = React.useState(false)
  const [isHeaderAndFooter, setIsHeaderAndFooter] = React.useState(true)
  const [isCardDelete, setIsCardDelete] = React.useState(false)
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false)

  return (
    <div className="app">
      {/*{isHeaderAndFooter &&*/}
      {/*<Header*/}
      {/*  loggedIn={loggedIn}*/}
      {/*  isHeaderMain={isHeaderMain}*/}
      {/*  onNavigationMenu={setIsNavigationMenuOpen}*/}
      {/*/>}*/}
      {/*<Switch>*/}
      {/*  <Route exact path="/">*/}
      {/*    <Main onIsHeaderMain={setIsHeaderMain}/>*/}
      {/*  </Route>*/}
      {/*  <Route path="/movies">*/}
      {/*    <Movies*/}
      {/*      onLoggedIn={setLoggedIn}*/}
      {/*      isCardDelete={isCardDelete}*/}
      {/*      onIsCardDelete={setIsCardDelete}*/}
      {/*    />*/}
      {/*  </Route>*/}
      {/*  <Route path="/saved-movies">*/}
      {/*    <SavedMovies*/}
      {/*      onLoggedIn={setLoggedIn}*/}
      {/*      isCardDelete={isCardDelete}*/}
      {/*      onIsCardDelete={setIsCardDelete}*/}
      {/*    />*/}
      {/*  </Route>*/}
      {/*  <Route path="/profile">*/}
      {/*    <Profile onLoggedIn={setLoggedIn}/>*/}
      {/*  </Route>*/}

      {/*  <Route path="/signin">*/}
      {/*    <Login onHeaderAndFooter={setIsHeaderAndFooter}/>*/}
      {/*  </Route>*/}
      {/*  <Route path="/signup">*/}
      {/*    <Register onHeaderAndFooter={setIsHeaderAndFooter}/>*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
      {/*{isHeaderAndFooter && <Footer/>}*/}
      {/*<NavigationMenu*/}
      {/*  isNavigationMenuOpen={isNavigationMenuOpen}*/}
      {/*  onNavigationMenu={setIsNavigationMenuOpen}*/}
      {/*/>*/}
      <NotFound/>
    </div>
  );
}

export default App;
