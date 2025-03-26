import  { useEffect, useState } from 'react';
import VideoPlayer from './components/TrailerComponent';
import { getVideo } from './api/getVideos';

type Props = {
  movieId: number;
};

const VideoContainer = ({ movieId }: Props) => {
  const [videoKey, setVideoKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const key = await getVideo(movieId);
      setVideoKey(key);
    };
    fetchVideo();
  }, [movieId]);

  return <VideoPlayer videoKey={videoKey} />;
};

export default VideoContainer;
