import {SectionTitle} from "../SectionTitle/SectionTitle";
import './Portfolio.css'
export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a href="https://examle20.github.io/how-to-learn/" className="portfolio__link" target="_blank">Статичный сайт</a>
            <a href="https://examle20.github.io/how-to-learn/" target="_blank"><div className="portfolio__link-image"/></a>
          </li>
          <li className="portfolio__link-item">
            <a href="https://examle20.github.io/russian-travel/index.html" className="portfolio__link" target="_blank">Адаптивный сайт</a>
            <a href="https://examle20.github.io/russian-travel/index.html" target="_blank"><div className="portfolio__link-image"/></a>
          </li>
          <li className="portfolio__link-item">
            <a href="https://mesto.project.nomoredomains.club/" className="portfolio__link" target="_blank">Одностраничное приложение</a>
            <a href="https://mesto.project.nomoredomains.club/" target="_blank"><div className="portfolio__link-image"/></a>
          </li>
        </ul>
      </nav>
    </section>
  );
}