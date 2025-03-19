import { useState, useCallback } from "react";
import { useMovieSearch } from "../hooks/useMovieSearch";
import MovieList from "../components/MovieList";
import { debounce } from "lodash";


const MoviesContainer = () => {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useMovieSearch(query);

  const handleInputChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    }, 500),
    []
  );

  return (
    <div>
      <input type="text" placeholder="Search Movies..." onChange={handleInputChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesContainer;