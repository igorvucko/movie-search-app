import { ReviewItem } from "..";

interface ReviewList {
  id: number;
  author: string;
  content: string;
}

function ReviewsList ({ reviews }: { reviews?: ReviewList[] })  {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <ul>
      <h2>Reviews:</h2>
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

export default ReviewsList;