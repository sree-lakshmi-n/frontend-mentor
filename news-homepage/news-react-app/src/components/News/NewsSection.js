import TopHeadline from "./TopHeadline";
import NewHeadlines from "./NewHeadlines";
import TopPicks from "./TopPicks";
import "./NewsSection.css";

const NewsSection = () => {
  const topHeadline = {
    title: "The bright future of web 3.0?",
    content:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    imageDesktop: "../../images/image-web-3-desktop.jpg",
    imageMob: "../../images/image-web-3-mobile.jpg",
  };

  const newHeadlines = {
    title: [
      "Hydrogen VS Electric cars",
      "The downsides of AI artistry",
      "Is VC funding drying up?",
    ],
    description: [
      "Will hydrogen-fueled cars ever catch up to EVs?",
      "What are the possible adverse effects of on-demand AI image generation?",
      "Private fundings by VC firms is down 50% YOY. We take a look at what that means.",
    ],
  };

  const topPicks = {
    num: ["01", "02", "03"],
    images: [
      "../../images/image-retro-pcs.jpg",
      "../../images/image-top-laptops.jpg",
      "../../images/image-gaming-growth.jpg",
    ],
    title: [
      "Reviving Retro PCs",
      "Top 10 Laptops of 2022",
      "The Growth of Gaming",
    ],
    content: [
      "What happens when old PCs are given modern upgrades?",
      "Our best picks for various needs and budgets.",
      "How the pandemic has sparked fresh opportunities.",
    ],
  };

  return (
    <main className="news-section">
      <TopHeadline headline={topHeadline} />
      <NewHeadlines headlines={newHeadlines} />
      <TopPicks topItem={topPicks} />
    </main>
  );
};

export default NewsSection;
