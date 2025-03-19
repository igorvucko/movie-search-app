/* interface Video {
    type: string;
    key: string;
  }

  export const TrailerPlayer = ({ videos }: { videos: Video[] }) => {
    const trailer = videos.find((v) => v.type === 'Trailer');

    if (!trailer) return <p>No trailer available.</p>;

    return (
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        allowFullScreen
      />
    );
  };
  */