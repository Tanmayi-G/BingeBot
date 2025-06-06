import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { lang, type LangKey } from "../utils/languageConstants";
import { useRef } from "react";
import openai_client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult, setLoading } from "../utils/gptSlice";

const GptSearchbar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector(
    (store: RootState) => store.config?.lang
  ) as LangKey;

  const loading = useSelector((store: RootState) => store.gpt.loading);

  const searchText = useRef<HTMLInputElement>(null);

  const searchMovie = async (movie: string) => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`;

    const res = await fetch(apiUrl, API_OPTIONS);
    const json = await res.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userInput = searchText?.current?.value;
    if (!userInput) return;

    dispatch(setLoading(true));

    try {
      const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: "${userInput}". Only give me names of 5 movies, comma separated, like the example result given ahead. Example result: Final Destination, Chucky, Anabelle, Until Dawn, Evil Dead`;

      const response = await openai_client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "openai/gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });

      const gptResults = response?.choices[0]?.message?.content?.split(",");

      if (!gptResults) return;

      const promiseArray = gptResults.map((movie: string) =>
        searchMovie(movie.trim())
      );
      const movieResults = await Promise.all(promiseArray);

      dispatch(
        addGptMoviesResult({
          movieNames: gptResults,
          movieResults: movieResults,
        })
      );
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-lg px-3 backdrop-blur-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-3 ml-1 col-span-10 border border-white text-black bg-gray-300 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
          disabled={loading}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-2 my-3 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-800 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
