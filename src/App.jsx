import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviesDetails from "./pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MoviesDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
