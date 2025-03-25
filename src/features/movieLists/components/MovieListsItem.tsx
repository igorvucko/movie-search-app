import { useState } from "react";
import AddToListModal from "../../movieLists/components/AddToListModal";
import { Movie } from "../../movies/types/movieTypes";
interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h3>{movie.title}</h3>
      <button onClick={() => setShowModal(true)}>Add to List</button>
      {showModal && <AddToListModal movie={movie} onClose={() => setShowModal(false)} open={false} />}
    </div>
  );
};

export default MovieItem;