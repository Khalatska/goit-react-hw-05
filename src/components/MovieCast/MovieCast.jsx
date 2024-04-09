import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    async function findMoviesCast() {
      try {
        const data = await fetchMoviesCast(movieId);
        setActors(data.cast.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    }
    findMoviesCast();
  }, [movieId]);
  return (
    <div>
      {actors !== null && (
        <ul className={css.list}>
          {Array.isArray(actors) &&
            actors.map((actor) => (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                ></img>
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
