import { NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import clsx from "clsx";
import css from "./App.module.css";
function App() {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={activeLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
