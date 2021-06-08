import {SectionTitle} from "../SectionTitle/SectionTitle";
import './Portfolio.css'
export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a href="" className="portfolio__link">Статичный сайт</a>
            <a href=""><div className="portfolio__link-image"/></a>
          </li>
          <li className="portfolio__link-item">
            <a href="" className="portfolio__link">Адаптивный сайт</a>
            <a href=""><div className="portfolio__link-image"/></a>
          </li>
          <li className="portfolio__link-item">
            <a href="" className="portfolio__link">Одностраничное приложение</a>
            <a href=""><div className="portfolio__link-image"/></a>
          </li>
        </ul>
      </nav>
    </section>
  );
}