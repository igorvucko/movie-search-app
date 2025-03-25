import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { removeMovieFromList } from "../store/movieListsSlice";
import { Movie } from "../../movies/types/movieTypes";

interface MovieCardListProps {
  listId: string;
  movie: Movie;
}

const MovieCardList = ({ listId, movie }: MovieCardListProps) => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {movie.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        movie.map((id) => {
const movie = movies.find((m) => m.id === id);
          if (!movie) return null;

          return (
            <div
key={movie.id}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h4>{movie.title}</h4>
              <button
                onClick={() =>
dispatch(removeMovieFromList({ listId, movieId: movie.id }))

                }

              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MovieCardList