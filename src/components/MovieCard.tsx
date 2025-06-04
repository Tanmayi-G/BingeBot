import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }: any) => {
  const posterURL = IMG_CDN_URL + movie?.poster_path;

  return (
    <div className="w-40 pr-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={posterURL}
        alt="Movie Card"
        className="h-50 w-full rounded-md"
      />
    </div>
  );
};

export default MovieCard;
