import { singleMovie } from "../../singles/types/singleMovieTypes";
import ActorList from "./ActorList";
import AddToListModal from "../../movieLists/components/AddToListModal";
import { useState } from "react";
import { Button } from "@mui/material";

interface SingleMovieProps {
  movie: singleMovie;
}

function SingleMovie({ movie }: SingleMovieProps)  {
  if (!movie) return <p>No movie details available.</p>;
  const [openModal, setOpenModal] =useState(false);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.length > 0
? movie.genres.map((genre) => genre.name).join(", ")
          : "Unknown"}
      </p>
      <div>
        <ActorList actors ={movie.credits.cast} />

        <Button onClick={()=> setOpenModal(true)} variant ="contained">
          Add to list
          </Button>
        <AddToListModal
        movie={movie}
        open={openModal}
        onClose={()=>setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default SingleMovie;