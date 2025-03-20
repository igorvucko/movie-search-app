import axios from "axios";
import { fetchGenres } from "./fetchGenres";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL?.trim();


export const getMoviesByGenre = async (genreInput: string) => {
    if (!genreInput.trim()) return [];


    const genres = await fetchGenres();

    if (!genres.length) {
        console.error("Failed to fetch genres from API.");
        return [];
    }


    const matchingGenre = genres.find((genre: { name: string; }) =>
genre.name.toLowerCase().includes(genreInput.toLowerCase())
    );

    if (!matchingGenre) {
        console.error("No matching genre found:", genreInput);
        return [];
    }

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
with_genres: matchingGenre.id,
            },
        });

console.log(`Fetching movies for genre: ${matchingGenre.name} (${matchingGenre.id})`);
        return response.data.results || [];
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
};