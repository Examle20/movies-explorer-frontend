import "./MoviesCardList.css"
import {MoviesCard} from "../MoviesCard/MoviesCard";
import logo1 from "../../images/img1.png"
import logo2 from "../../images/img2.png"

export const MoviesCardList = () => {
  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo1} title="33 слова о дизайне" time="1ч42м"/>
        <MoviesCard src={logo2} title="33 слова о дизайне" time="1ч42м"/>
      </ul>
      <button className="movies-card__button-more">Ещё</button>
    </section>
  );
}