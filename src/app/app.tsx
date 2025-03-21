import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";

const MoviesContainer = lazy(() => import('../features/movies/MoviesContainer.tsx'));
const SingleMovieContainer = lazy(() => import('../features/singles/SingleMovieContainer.tsx'));
const App = () => {
  return (
    <Provider store ={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movies/:id" element={<SingleMovieContainer />} />
      </Routes>
      </Suspense>
    </Router>
    </Provider>
  );
};

export default App;