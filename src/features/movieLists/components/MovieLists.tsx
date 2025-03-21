import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { deleteList } from "../store/movieListsSlice";

const MovieLists: React.FC = () => {
  const lists = useSelector((state: RootState) => state.movieLists.lists);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>My Movie Lists</h2>
      {lists.length === 0 ? (
        <p>No movie lists created.</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
                <h3>
                    {list.name}
                </h3>
                <button onClick={() =>
                    dispatch(deleteList(list.id))}>Delete List</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieLists;