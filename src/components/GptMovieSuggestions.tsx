import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  ) as any;

  if (!Array.isArray(movieNames)) return null;

  return (
    <div className="p-5 m-4 bg-[rgb(0,0,0,0.8)] text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
