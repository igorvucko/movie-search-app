interface RatingStarsProps {
    currentRating: number;
    onRate: (rating: number) => void;
  }

  const RatingStars = ({ currentRating, onRate }: RatingStarsProps) => {
    return (
      <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => onRate(star)}
            style={{
              color: star <= currentRating ? "#ffc107" : "#e4e5e9",
              fontSize: "20px",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  export default RatingStars;
