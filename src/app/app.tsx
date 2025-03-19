import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "../features/movies/components/MoviesPage";
import { SingleMovieContainer } from "../features/singles/containers/SingleMovieContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMovieContainer />} />
      </Routes>
    </Router>
  );
};

export default App;