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

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
