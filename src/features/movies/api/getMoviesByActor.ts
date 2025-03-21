import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();

export const getMoviesByActor = async (actorName: string) => {
  if (!actorName.trim()) return [];
  try {
    const response = await axios.get(`${BASE_URL}/search/person`, {
      params: { api_key: API_KEY, query: actorName.trim() },
    });


    const actors = response.data.results || [];
    if (actors.length > 0 && actors[0].known_for) {
      return actors[0].known_for;
    }
    return [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};