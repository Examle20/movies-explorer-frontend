import {SectionTitle} from "../SectionTitle/SectionTitle";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <SectionTitle title="Студент"/>
      <h2 className="about-me__name">Виталий</h2>
      <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
      <p className="about-me__text">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
        года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
        заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>
      <nav>
        <ul className="about-me__links">
          <li className="about-me__links-item"><a href="" className="about-me__link">Facebook</a></li>
          <li className="about-me__links-item"><a href="" className="about-me__link">Github</a></li>
        </ul>
      </nav>
      <div className="about-me__photo"/>
    </section>
  );
}