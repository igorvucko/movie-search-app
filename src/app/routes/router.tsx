import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../../components/Header";
import MovieListsContainer from "../../features/movieLists/MovieListsContainer";

const MoviesContainer = lazy(() => import("../../features/movies/MoviesContainer"));
const SingleMovieContainer = lazy(() => import("../../features/singles/SingleMovieContainer"));


const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<MoviesContainer />} />
            <Route path="/movies/:id" element={<SingleMovieContainer />} />
            <Route path="/movie-lists" element={<MovieListsContainer />} />
          </Routes>
        </>
      </Suspense>
    </Router>
  );
};

export default AppRouter;