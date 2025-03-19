import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

if (!API_KEY) {
  console.error("TMDB API Key is missing! Check your .env file.");
}

export const fetchMovies = async (query: string) => {
  if (!query.trim()) return [];

  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query.trim(),

      },
    });

    console.log("API Response:", response.data);

    return response.data.results || [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};