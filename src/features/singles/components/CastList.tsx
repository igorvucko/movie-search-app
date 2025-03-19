import { Cast } from "./Cast";

interface Actor {
    id: number;
    name: string;
    character: string;
  }

  export const CastList = ({ cast }: { cast?: Actor[] }) => {
    if (!cast || cast.length === 0) {
      return <p>No cast available.</p>;
    }

    return (
      <ul>
        {cast.map((actor) => (
          <Cast
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </ul>
    );
  };