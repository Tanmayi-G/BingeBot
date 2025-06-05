import { useSelector } from "react-redux";
import banner from "../assets/banner.jpg";
import type { RootState } from "../utils/appStore";
import { lang, type LangKey } from "../utils/languageConstants";

const GptSearchbar = () => {
  const langKey = useSelector(
    (store: RootState) => store.config?.lang
  ) as LangKey;

  return (
    <div className="pt-[10%] flex justify-center">
      <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] -z-5"></div>
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
      <form
        className="w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-lg px-3 backdrop-blur-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-3 ml-1 col-span-10 border border-white text-black bg-gray-300 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-2 my-3 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-800 transition">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
