import { Link } from "react-router-dom";
import type { Movie } from "../../movies/types/movieTypes";

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "15px",
      padding: "20px"
    }}>
      {movies.map((movie) => (
        <li key={movie.id}style={{
          border: "1px solid #ddd",
          padding: "16px",
          marginBottom: "16px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
        }}>
          <Link to={`movies/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{movie.title}</h3>
            <p>{movie.overview.substring(0, 100)}...</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>

            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginBottom: "10px" }}
              />
            )}


          </Link>
        </li>
      ))}
    </div>
  );
}

export default MovieList;