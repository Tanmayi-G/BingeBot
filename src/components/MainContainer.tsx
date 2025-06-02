import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store: RootState) => {
    return store.movies?.nowPlayingMovies;
  });

  if (movies === null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen overflow-hidden">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
