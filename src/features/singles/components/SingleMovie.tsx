import { singleMovie } from "../../singles/types/singleMovieTypes";
import ActorList from "./ActorList";

interface SingleMovieProps {
  movie: singleMovie;
}

function SingleMovie({ movie }: SingleMovieProps)  {
  if (!movie) return <p>No movie details available.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.length > 0
? movie.genres.map((genre) => genre.name).join(", ")
          : "Unknown"}
      </p>
        <ActorList actors ={movie.credits.cast} />

    </div>
  );
};

export default SingleMovie;