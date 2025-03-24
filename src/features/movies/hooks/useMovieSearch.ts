import { useState, useEffect } from "react";
import { getMovies } from "../api/getMovies";
import { getMoviesByActor } from "../api/getMoviesByActor";
import { getMoviesByGenre } from "../api/getMoviesByGenre";
import { Movie } from "../types/movieTypes";
import { getTrendingMovies } from "../api/getTrendingMovies";

export const useMovieSearch = (query: string, searchBy: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = query
          ? await getMovies(query)
          : await getTrendingMovies();
        setMovies(results);
      } catch (err: any) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

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
          results = await getMoviesByGenre(query);
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