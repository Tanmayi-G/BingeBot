import MovieCard from "./MovieCard";

type TMovieListProps = {
  title: string;
  movies: any;
};

const MovieList = (props: TMovieListProps) => {
  const { title, movies } = props;

  return (
    <div className="py-2 text-white relative">
      <h1 className="text-xl font-bold py-3">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex">
          {movies?.map((movie: any) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
