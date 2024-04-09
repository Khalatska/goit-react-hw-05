import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [categoryMovies, setCategoryMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    async function findMoviesByQuery() {
      try {
        if (query) {
          const data = await fetchMovieByQuery(query);
          setCategoryMovies(data.results);
        } else {
          setCategoryMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    findMoviesByQuery();
  }, [query]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const searchQuery = evt.currentTarget.elements.type.value;
    if (searchQuery.trim() === "") {
      alert("Please enter search value!");
      return;
    }
    setSearchParams({ query: searchQuery });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="type"
          autoComplete="off"
          autoFocus
          className={css.input}
        ></input>
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {categoryMovies !== null && (
        <MovieList moviesList={categoryMovies}></MovieList>
      )}
    </div>
  );
};

export default MoviesPage;
