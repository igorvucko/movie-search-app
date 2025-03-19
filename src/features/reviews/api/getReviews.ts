import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

if (!API_KEY) {
  console.error("TMDB API Key is missing! Check your .env file.");
}

export const getReviews = async (movieId: number) => {
  if (!movieId) {
    console.error("Movie ID is required to fetch reviews.");
    return [];
  }

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results || [];
  } catch (error) {
    console.error("API Error fetching reviews:", error);
    return [];
  }
};