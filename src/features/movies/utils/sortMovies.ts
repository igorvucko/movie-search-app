export const sortMovies = (
    movies: any[],
    sortBy: string,
    selectedYear: string,
    selectedGenre: string,
    genresList: { id: number; name: string }[]
  ) => {
    return movies
      .filter((movie) => {
        const hasYear = selectedYear
          ? new Date(movie.release_date).getFullYear().toString() === selectedYear
          : true;


        const movieGenres = Array.isArray(movie.genres) ? movie.genres : [];
        const movieGenreIds = Array.isArray(movie.genre_ids) ? movie.genre_ids : [];


  const selectedGenreId = genresList.find((g) => g.name === selectedGenre)?.id;


        const hasGenre = selectedGenre
          ? selectedGenreId
  ? movieGenres.some((g: { id: number; }) => g.id === selectedGenreId) || movieGenreIds.includes(selectedGenreId)
            : false
          : true;

        return hasYear && hasGenre;
      })
      .sort((a, b) => {
        if (sortBy === "year") {
          return new Date(a.release_date).getFullYear() - new Date(b.release_date).getFullYear();
        }
        if (sortBy === "genre") {
          return (a.genres?.[0]?.name || "").localeCompare(b.genres?.[0]?.name || "");
        }
        return 0;
      });
  };