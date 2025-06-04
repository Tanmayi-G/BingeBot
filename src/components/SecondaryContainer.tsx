import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);

  return (
    <div className="bg-black pb-12">
      <div className=" -mt-56 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
