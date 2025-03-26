

type TrailerComponentProps = {
  videoKey: string | null;
};

const VideoPlayer = ({ videoKey }: TrailerComponentProps) => {
  if (!videoKey) {
    return <p>No trailer available.</p>;
  }

  return (
    <div className="w-full aspect-video mb-4 rounded-md shadow-md">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;