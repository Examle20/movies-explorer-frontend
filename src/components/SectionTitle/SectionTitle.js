import "./SectionTitle.css"

export const SectionTitle = (props) => {
  return (
    <>
     <h2 className="section-title" id={props.id}>{props.title}</h2>
    </>
  );
}