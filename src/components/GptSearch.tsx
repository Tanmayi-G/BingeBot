import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";
import banner from "../assets/banner.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] -z-5"></div>
      <img
        src={banner}
        alt="Banner"
        className="fixed w-screen h-screen object-cover inset-0 -z-10 "
      />
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
