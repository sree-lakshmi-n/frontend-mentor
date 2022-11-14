import "./TopPicks.css";
import TopPicksItems from "./TopPicksItems";
import img0 from "../../images/image-top-pick-1.jpg";
import img1 from "../../images/image-top-pick-2.jpg";
import img2 from "../../images/image-top-pick-3.jpg";

const TopPicks = (props) => {
  return (
    <div className="top-picks">
      <TopPicksItems
        image={img0}
        num={props.topItem.num[0]}
        title={props.topItem.title[0]}
        content={props.topItem.content[0]}
      />
      <TopPicksItems
        image={img1}
        num={props.topItem.num[1]}
        title={props.topItem.title[1]}
        content={props.topItem.content[1]}
      />
      <TopPicksItems
        image={img2}
        num={props.topItem.num[2]}
        title={props.topItem.title[2]}
        content={props.topItem.content[2]}
      />
    </div>
  );
};

export default TopPicks;
