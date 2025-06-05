import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <div>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
