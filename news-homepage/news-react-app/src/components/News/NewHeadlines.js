import "./NewHeadlines.css";
import NewHeadlineItems from "./NewHeadlineItems";

const NewHeadlines = (props) => {
  return (
    <div className="new-headlines">
      <h2 className="new-headlines__title">New</h2>
      <div className="new-headlines__wrapper">
        <NewHeadlineItems
          title={props.headlines.title[0]}
          desc={props.headlines.description[0]}
        />
        <NewHeadlineItems
          title={props.headlines.title[1]}
          desc={props.headlines.description[1]}
        />
        <NewHeadlineItems
          title={props.headlines.title[2]}
          desc={props.headlines.description[2]}
        />
      </div>
    </div>
  );
};

export default NewHeadlines;
