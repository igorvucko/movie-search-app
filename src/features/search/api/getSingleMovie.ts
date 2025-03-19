import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

if (!API_KEY) {
  console.error("TMDB API Key is missing! Check your .env file.");
}

export const fetchMovieDetails = async (movieId: string) => {
  if (!movieId.trim()) return null;

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "credits,reviews,videos",
      },
    });

    console.log("API Response:", response.data);
    return response.data || null;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};