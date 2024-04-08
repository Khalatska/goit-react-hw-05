import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzY0NTYwN2IyNmE1YjA0ODE0MWZkYWYzY2U4NWY0YyIsInN1YiI6IjY2MTNmN2E1NTQzN2Y1MDE0YTdkNGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NF4U_D4dywKt41-AaDzOG0Q5wjqAFjzEnucWNzcb6k8",
  },
};

export const fetchTopMovies = async () => {
  const res = await axios.get(url, options);
  return res.data;
};
 