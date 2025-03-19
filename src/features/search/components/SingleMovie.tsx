import { CastList } from './CastList';
import { Movie } from '../../movies/types/movieTypes';


interface SingleMovieProps {
  movie: Movie;
}

function SingleMovie({ movie }: SingleMovieProps)  {
  if (!movie) return <p>No movie details available.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <CastList cast={movie.credits.cast} />

    </div>
  );
};

export default SingleMovie;