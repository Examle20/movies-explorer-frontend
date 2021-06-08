import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__row">
        <p className="footer__author"> © 2020</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__links-item"><a href="" className="footer__link">Яндекс.Практикум</a></li>
            <li className="footer__links-item"><a href="" className="footer__link">Github</a></li>
            <li className="footer__links-item"><a href="" className="footer__link">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}