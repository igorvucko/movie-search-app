import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { removeMovieFromList } from "./store/movieListsSlice";

const MovieListsContainer = () => {
  const lists = useSelector((state: RootState) => state.movieLists.lists);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();
  const [expandedList, setExpandedList] = useState<string | null>(null);

  const toggleList = (listId: string) => {
    setExpandedList(expandedList === listId ? null : listId);
  };

  return (
    <div>
      <h1>My Movie Lists</h1>
      {lists.length > 0 ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
                <div onClick={()=>toggleList(list.id)}
                        style={{ cursor: "pointer", fontWeight: "bold" }}>
{list.name} {expandedList === list.id ? "▼" : "▶"}
              </div>
{expandedList === list.id && (
                <ul>
                  {list.movies.length > 0 ? (
                    list.movies.map((movieId) => {
const movie = movies.find((m) => m.id === movieId);
                      return movie ? (
                        <li key={movie.id}>
                          {movie.title}
                          <button onClick={()=>dispatch(removeMovieFromList
                                        ({ listId: list.id, movieId: movie.id }))}>
                            Remove
                          </button>
                        </li>
                      ) : null;
                    })
                  ) : (
                    <li>No movies added yet.</li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No lists created yet.</p>
      )}
    </div>
  );
};

export default MovieListsContainer;