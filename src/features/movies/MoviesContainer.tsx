import { useState, useCallback, useEffect } from "react";
import { useMovieSearch } from "./hooks/useMovieSearch";
import MovieList from "./components/MovieList";
import { debounce } from "lodash";
import { fetchGenres } from "./api/fetchGenres";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {  setSelectedYear, setSelectedGenre } from "./store/sortSlice";
import { sortMovies } from "./utils/sortMovies";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.sort.sortBy);
  const selectedYear = useSelector((state: RootState) => state.sort.selectedYear);
  const selectedGenre = useSelector((state: RootState) => state.sort.selectedGenre);

  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const { movies, loading, error } = useMovieSearch(query, searchBy);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

  const handleInputChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    }, 500),
    []
  );

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedYear(e.target.value));
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedGenre(e.target.value));
  };

  useEffect(() => {
    const loadGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(genreData);
    };
    loadGenres();
  }, []);

  const sortedMovies = sortMovies(movies, sortBy, selectedYear, selectedGenre, genres);

  return (
    <div>
      <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        <option value="title">Search by Title</option>
        <option value="actor">Search by Actor</option>
      </select>

      <input type="text" placeholder={`Search by ${searchBy}...`} onChange={handleInputChange} />
      <p style={ {fontWeight : "bold", marginTop:"10px"}}>Sort by</p>


      <select onChange={handleYearChange} value={selectedYear}>
        <option value="">Select Year</option>
        {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
          <option key={year} value={year.toString()}>
            {year}
          </option>
        ))}
      </select>

      <select onChange={handleGenreChange} value={selectedGenre}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
{genre.name}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <MovieList movies={sortedMovies} genres={genres} />
    </div>
  );
};

export default MoviesContainer;