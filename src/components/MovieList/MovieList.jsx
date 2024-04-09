import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieList.module.css";

const MovieList = ({ moviesList }) => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const location = useLocation();
  return (
    <div>
      <ul>
        {Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            return (
              <li key={movie.id}>
                <NavLink
                  to={`/movies/${movie.id}`}
                  state={location}
                  className={activeLink}
                >
                  {movie.original_title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
