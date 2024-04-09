import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../services/api";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function findMoviesByQuery() {
      try {
        const data = await fetchMovieByQuery(query);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    findMoviesByQuery();
  }, [query]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.elements.type.value;
    if (query.trim() === "") {
      alert("Please enter search value!");
      return;
    }
    setQuery(query);
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="text" name="type" autoComplete="off" autoFocus></input>
      </form>
    </div>
  );
};

export default MoviesPage;
