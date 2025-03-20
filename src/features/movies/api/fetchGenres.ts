import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

if (!API_KEY) {
  console.error("TMDB API Key is missing! Check your .env file.");
}

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    console.log("Fetched Genres:", response.data.genres);
    return response.data.genres || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};