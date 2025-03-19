import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/getSingleMovie";
import SingleMovie from "../components/SingleMovie";
import type { Movie } from "../../movies/types/movieTypes";
import { Link } from "react-router-dom";

export const SingleMovieContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMovie = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <div>
      <SingleMovie movie={movie} />
      <br />
      <Link to="/" style={{ color: "blue" }}>Back to Movies</Link>
    </div>
  );
};