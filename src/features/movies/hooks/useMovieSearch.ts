
import { useState, useEffect } from "react";
import { fetchMovies } from "../api/getMovies";
import { Movie } from "../types/movieTypes";

export const useMovieSearch = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchMovies(query);
        setMovies(results);
      } catch (err) {
        setError("Error fetching movies. Please try again.");
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return { movies, loading, error };
};