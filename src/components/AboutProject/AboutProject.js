import {SectionTitle} from "../SectionTitle/SectionTitle";

export const AboutProject = () => {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте"/>
      <article className="about-project__group">
        <div className="about-project__text">
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text-paragraph">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text">
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>
      <div className="about-project__time-line">
        <div className="about-project__progress-part">
          <div className="about-project__progress-bar about-project__progress-bar_backend">1 неделя</div>
          <p className="about-project__subtitle">Back-end</p>
        </div>
        <div className="about-project__progress-part">
          <div className="about-project__progress-bar">4 недели</div>
          <p className="about-project__subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}