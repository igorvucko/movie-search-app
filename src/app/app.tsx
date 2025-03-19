import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesContainer from "../features/movies/containers/MoviesContainer";
import { SingleMovieContainer } from "../features/singles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movies/:id" element={<SingleMovieContainer />} />
      </Routes>
    </Router>
  );
};

export default App;