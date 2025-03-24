import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};
