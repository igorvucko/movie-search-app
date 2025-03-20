import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const MoviesContainer = lazy(() => import('../features/movies/MoviesContainer.tsx'));
const SingleMovieContainer = lazy(() => import('../features/singles/SingleMovieContainer.tsx'));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movies/:id" element={<SingleMovieContainer />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App;