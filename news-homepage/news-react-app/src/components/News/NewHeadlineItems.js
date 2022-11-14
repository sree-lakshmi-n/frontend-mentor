import "./NewHeadlineItems.css";
const NewHeadlineItems = (props) => {
  return (
    <div className="new-headlines__container">
      <p className="new-headlines__heading">{props.title}</p>
      <p className="new-headlines__description">{props.desc}</p>
    </div>
  );
};

export default NewHeadlineItems;
