import "./TopPicks.css";
const TopPicksItems = (props) => {
  return (
    <div className="top-picks__wrapper">
      <div className="top-pick__img">
        <img src={props.image} />
      </div>
      <div className="top-pick__textbox">
        <p className="top-pick__num">{props.num}</p>
        <p className="top-pick__title">{props.title}</p>
        <p className="top-pick__content">{props.content}</p>
      </div>
    </div>
  );
};

export default TopPicksItems;
