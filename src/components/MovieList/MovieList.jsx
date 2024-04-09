import { Link } from "react-router-dom";

const MovieList = ({ moviesList }) => {
  return (
    <div>
      <ul>
        {Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
