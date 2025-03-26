import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./api/getSingleMovie";
import SingleMovie from "./components/SingleMovie";
import type { Movie } from "../movies/types/movieTypes";
import { Link } from "react-router-dom";
import { getReviews } from "../reviews/api/getReviews";
import ReviewsList from "../reviews/components/ReviewsList";
import { Button } from "@mui/material";


function SingleMovieContainer  ()  {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews]=useState([]);

  useEffect(() => {
    if (!id) return;

    const loadMovie = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        const reviewsData = await getReviews(parseInt(id));
        setReviews(reviewsData)
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <div>
      <SingleMovie movie={movie} />
      <br />
      <ReviewsList reviews={reviews} />
      <Button component= {Link}
              to="/"
              variant="contained"
              >Back to movies</Button>


    </div>
  );
};

export default SingleMovieContainer;