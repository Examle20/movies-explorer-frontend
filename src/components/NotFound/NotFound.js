import "./NotFound.css"
export const NotFound = (props) => {
  return (
    <div className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <a href="" className="not-found__link">Назад</a>
    </div>
  );
}