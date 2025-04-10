
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { removeMovieFromList, deleteList } from "./store/movieListsSlice";
import CreateListForm from "./components/CreateListForm";
import { MovieComponent } from "../movies";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const MovieListsContainer = () => {
  const lists = useSelector((state: RootState) => state.movieLists.lists);
  const dispatch = useDispatch();
  const [expandedList, setExpandedList] = useState<string | null>(null);

  const toggleList = (listId: string) => {
    setExpandedList(expandedList === listId ? null : listId);
  };

  return (
    <div>
      <h1>My Movie Lists</h1>
      <CreateListForm />
      {lists.length > 0 ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <div style={{display:"flex", alignItems:"center", paddingBottom:"20px"}}>
              <div

              onClick={() => toggleList(list.id)} style={{ cursor: "pointer", fontWeight: "bold", display:"flex", alignItems:"center",gap:"0.5rem" }}>
                {list.name} {expandedList === list.id ? "▼" : "▶"}
              </div>
              <Button
                          color="error"
                          variant="contained"
                          style={{marginLeft:"auto"}}
                          onClick={(e) =>{
                            e.stopPropagation()
                          dispatch(deleteList(list.id))
                          toast.info(`${list.name} removed from list.`);
                        }}

                          >
                          Delete List
                        </Button>

                        </div>
              {expandedList === list.id && (
                <div className="movie-card-grid">
                  {list.movies.length > 0 ? (
                    list.movies.map((movie) => (
                      <div key={movie.id} className="movie-card-wrapper">
                        <Link to={ `/movies/${movie.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}>
                        <MovieComponent
                          id={movie.id}
                          title={movie.title}
                          poster_Path={movie.poster_path}
                          vote_average={movie.vote_average}
                          genres={movie.genres}
                          overview={movie.overview}
                        />
                        </Link>
                        <Button
                          color="error"
                          variant="contained"
                          style={{margin:"10px"}}
                          onClick={() =>{
                          dispatch(removeMovieFromList({ listId: list.id, movieId: movie.id }))
                          toast.info(`${movie.title} removed from list.`);
                        }}

                          >
                          Remove movie
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p>No movies added yet.</p>
                  )}
                </div>
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
