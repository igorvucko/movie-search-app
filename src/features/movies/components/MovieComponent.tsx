interface MovieProps {
    id: number;
    title: string;
    overview: string;
    poster_Path: string;
  }

  function Movie({ id, title, overview, poster_Path }: MovieProps)  {
    return (
      <li style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", listStyle: "none" }}>
        <h3>{title}</h3>
        <p>{overview}</p>
        <p>Movie ID: {id}</p>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_Path}`}
          alt={title}
        />
      </li>
    );
  };

  export default Movie;