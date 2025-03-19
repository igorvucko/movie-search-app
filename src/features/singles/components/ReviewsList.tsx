/*import { ReviewItem } from "./ReviewItem";

interface Review {
  id: string;
  author: string;
  content: string;
}

export const ReviewsList = ({ reviews }: { reviews?: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          id={review.id}
          author={review.author}
          content={review.content}
        />
      ))}
    </ul>
  );
};
*/