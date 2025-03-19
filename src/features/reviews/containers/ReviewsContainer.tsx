import { useEffect, useState } from "react";
import { getReviews } from "../api/getReviews";
import ReviewList from "../components/ReviewsList";

interface ReviewsContainerProps {
  movieId: number;
}

const ReviewsContainer = ({ movieId }: ReviewsContainerProps) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (err) {
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;
  if (reviews.length === 0) return <p>No reviews available.</p>;

  return <ReviewList reviews={reviews} />;
};

export default ReviewsContainer;