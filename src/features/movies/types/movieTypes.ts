import { JSX } from "react/jsx-runtime";

export interface Actor {
  id: number;
  name: string;
  character: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
}

export interface Video {
  id: string;
  key: string;
  type: string;
}

export interface Movie {
  map(arg0: (id: any) => JSX.Element | null): import("react").ReactNode;
  length: number;
  sortBy:string;
  name: string;
  poster_path: string;
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids:number [];
  genres: {id:number; name: string}[]
  credits: {
    cast: Actor[];
  };
  reviews: {
    results: Review[];
  };
  videos: {
    results: Video[];
  };
}