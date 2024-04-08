import { fetchTopMovies } from "../../services/api";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    async function topMovies() {
      try {
        const data = await fetchTopMovies();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    topMovies();
  }, []);

  return <div></div>;
};

export default HomePage;
