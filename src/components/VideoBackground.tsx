import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

export type TVideoProps = {
  movieId: number;
};

const VideoBackground = ({ movieId }: TVideoProps) => {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  useMovieTrailer({ movieId });

  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
