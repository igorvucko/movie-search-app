import ActorList from "./ActorList";
import AddToListModal from "../../movieLists/components/AddToListModal";
import { useState } from "react";
import { Button } from "@mui/material";
import { Movie } from "../../movies/types/movieTypes";
import RatingStarsContainer from "../../ratings/RatingsContainer";
import VideoContainer from "../../videos/VideosContainer";

interface SingleMovieProps {
  movie: Movie
}

function SingleMovie({ movie }: SingleMovieProps)  {
  if (!movie) return <p>No movie details available.</p>;
  const [openModal, setOpenModal] =useState(false);

  return (
    <div style={{marginLeft:"30px", flex:"gap-8"}}>
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
      <div style={{marginTop:"10px"}}>
        <p><strong>Rating :</strong></p>
        <RatingStarsContainer movieId={movie.id} />
      </div>
      </div>

      <div>
        <ActorList actors ={movie.credits.cast} />

        <Button style={{display:"flex",marginTop:"20px" , marginBottom:"20px"}} onClick={()=> setOpenModal(true)} variant ="contained">
          Add to list
          </Button>
        <AddToListModal
        movie={movie}
        open={openModal}
        onClose={()=>setOpenModal(false)}
        />
      </div>
      <div >
      <VideoContainer movieId={movie.id} />
      </div>
    </div>
  );
};

export default SingleMovie;