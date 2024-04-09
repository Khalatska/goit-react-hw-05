import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
