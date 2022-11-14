import "./TopHeadline.css";

const TopHeadline = (props) => {
  const topHeadlineImg = require("../../images/image-web-3-desktop.jpg");

  return (
    <article className="top-headline">
      <div className="top-headline__img">
        <img src={topHeadlineImg} />
      </div>
      <div className="top-headline__textbox">
        <h1 className="top-headline__title">{props.headline.title}</h1>
        <p className="top-headline-content">{props.headline.content}</p>
        <button className="read-more-btn">Read more</button>
      </div>
    </article>
  );
};

export default TopHeadline;
