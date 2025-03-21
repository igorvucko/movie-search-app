import { useState } from "react";
import AddToListModal from "../../movieLists/components/AddToListModal";

interface MovieItemProps {
  movie: { id: number; title: string };
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