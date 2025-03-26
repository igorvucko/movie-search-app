export const getVideo = async (movieId: number): Promise<string | null> => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

    const res = await fetch(url);
    const data = await res.json();

    const trailer = data.results?.find(
  (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return trailer ? trailer.key : null;
  };