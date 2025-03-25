import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import RatingStars from "./components/RatingStars";
import { rateMovie } from "./store/ratingSlice";
import { toast } from "react-toastify";

interface RatingStarsContainerProps {
  movieId: number;
}

const RatingStarsContainer = ({ movieId }: RatingStarsContainerProps) => {
  const dispatch = useDispatch();
  const currentRating = useSelector(
    (state: RootState) => state.ratings[movieId] || 0
  );

  const handleRating = (rating: number) => {
    dispatch(rateMovie({ movieId, rating }));
    toast.success(` Movie is rated  ${rating} !`)
  };

  return (
    <RatingStars
      currentRating={currentRating}
      onRate={handleRating}
    />
  );
};

export default RatingStarsContainer;