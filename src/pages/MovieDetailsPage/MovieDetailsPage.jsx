import { useEffect, useRef, useState } from "react";
import {
  useParams,
  Routes,
  Route,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { findMoviesById } from "../../services/api";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRes = useRef(location.state ?? "/");
  const [movie, setMovie] = useState(null);
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  useEffect(() => {
    async function fetchMoviesById() {
      try {
        const data = await findMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviesById();
  }, [movieId]);
  return (
    <div>
      {movie !== null && (
        <div className={css.container}>
          <>
            {" "}
            <Link to={backLinkRes.current} className={css.linkGoBack}>
              {" "}
              Go back
            </Link>
          </>
          <div className={css.imgDet}>
            <>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.original_title}
                className={css.imgMovie}
              />
            </>

            <div className={css.det}>
              <h1>{movie.original_title}</h1>
              <p>User score {Math.round(movie.vote_average * 10)}%</p>
              <p>
                <b>Overview </b>
                {movie.overview}
              </p>
              <ul>
                <b>Genres</b>
                {Array.isArray(movie.genres) &&
                  movie.genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
              </ul>
            </div>
          </div>
          <div className={css.listAddContainer}>
            <ul className={css.listAdd}>
              <b>Additional information</b>
            </ul>
            <li>
              {" "}
              <NavLink className={activeLink} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className={activeLink} to="review">
                Review
              </NavLink>
            </li>

            <Routes>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="review" element={<MovieReviews />}></Route>
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
