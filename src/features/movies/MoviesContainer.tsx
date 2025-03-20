import { useState, useCallback,useEffect } from "react";
import { useMovieSearch } from "./hooks/useMovieSearch";
import MovieList from "./components/MovieList";
import { debounce } from "lodash";
import { fetchGenres } from "./api/fetchGenres";


const MoviesContainer = () => {
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("title"); // Default: search by title
  const { movies, loading, error } = useMovieSearch(query, searchBy);
  const [genres,setGenres]=useState<{id:number;name:string}[]>([]);
  const handleInputChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    }, 500),
    []
  );

  useEffect(() => {
    const loadGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(genreData);
    };
    loadGenres();
  }, []);

  return (
    <div>
      {/* Search Type Dropdown */}
      <select
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="title">Search by Title</option>
        <option value="actor">Search by Actor</option>
        <option value="genre">Search by Genre</option>
      </select>

      {/* Search Input (Visible for all types) */}
      <input
        type="text"
        placeholder={`Search by ${searchBy}...`}
        onChange={handleInputChange}
        style={{ padding: "5px", width: "250px", marginLeft: "10px" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList movies={movies} genres={genres} />
    </div>
  );
};

export default MoviesContainer;