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
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black -z-10 overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
