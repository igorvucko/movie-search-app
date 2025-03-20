import { useState, useEffect } from "react";
import { getMovies } from "../api/getMovies";
import { getMoviesByActor } from "../api/getMoviesByActor";
import { getMoviesByGenre } from "../api/getMoviesByGenre";
import { Movie } from "../types/movieTypes";

export const useMovieSearch = (query: string, searchBy: string) => {
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
        let results = [];
        if (searchBy === "title") {
          results = await getMovies(query);
        } else if (searchBy === "actor") {
          results = await getMoviesByActor(query);
        } else if (searchBy === "genre") {
          results = await getMoviesByGenre(query); // 🔹 Genre now accepts text input
        }
        setMovies(results);
      } catch (err) {
        setError("Error fetching movies. Please try again.");
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, searchBy]);

  return { movies, loading, error };
};