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

function App() {
  return (
    <div className="app">
      <Header/>
      {/*<SavedMovies/>*/}
      {/*<Footer/>*/}
      {/*<Profile/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      <NotFound/>
    </div>
  );
}

export default App;
