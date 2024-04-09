import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
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
