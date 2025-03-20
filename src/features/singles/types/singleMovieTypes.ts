export interface Actor {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
}

export interface singleMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path?: string;
  genres: { id: number; name: string }[];
  credits: { cast: Actor[] };
}