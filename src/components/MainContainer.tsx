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
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-r  from-black to-transparent z-0 " />
      <div className="pt-[25%] -mt-32 bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} />

        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export default MainContainer;
