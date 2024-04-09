import { useEffect } from "react";
import { fetchMoviesCast } from "../../services/api";

const MovieCast = ({ movieId }) => {
  useEffect(() => {
    async function findMoviesCast(movieId) {
      try {
        const data = await fetchMoviesCast(movieId);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    findMoviesCast();
  }, [movieId]);
  return <div></div>;
};

export default MovieCast;
