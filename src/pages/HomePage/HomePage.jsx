import { fetchTopMovies } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    async function topMovies() {
      try {
        const data = await fetchTopMovies();
        setMoviesList(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    topMovies();
  }, []);

  return (
    <div>
      <p> Trending today</p>
      {moviesList !== null && <MovieList moviesList={moviesList} />}
    </div>
  );
};

export default HomePage;
