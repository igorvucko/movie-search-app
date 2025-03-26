import React from "react";
import { Actor } from "../types/singleMovieTypes";
import { useState } from "react";
import { Button } from "@mui/material";

interface ActorListProps {
  actors: Actor[];
}

const ActorList: React.FC<ActorListProps> = ({ actors }) => {

  const [showAll, setShowAll] = useState(false);
  const visibleActors = showAll ? actors : actors.slice(0, 5);
  if (!actors.length) return <p>No cast information available.</p>;

  return (
    <div>
      <h3>Cast:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {visibleActors.map((actor) => (
            <li key={actor.id} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
              />
            ) : (
              <span style={{ width: "50px", height: "50px", display: "inline-block", background: "#ddd", borderRadius: "50%", textAlign: "center", lineHeight: "50px" }}>No Image</span>
            )}
            <strong>{actor.name } </strong>:    as  { actor.character}
          </li>
        ))}
      </ul>
      {actors.length > 5 && (
        <Button variant="contained"
              onClick={()=> setShowAll(!showAll)}>{showAll ? "Show less" : "Read more"}</Button>


      )}
    </div>
  );
};
export default ActorList;