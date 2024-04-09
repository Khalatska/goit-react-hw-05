import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../services/api.js";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    async function findMoviesReviews() {
      try {
        const data = await fetchMoviesReviews(movieId);
        setReview(data.results.slice(0, 2));
      } catch (error) {
        console.log(error);
      }
    }
    findMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {review !== null && Array.isArray(review) && review.length > 0 ? (
        review.map((rev) => {
          return (
            <li key={rev.id} className={css.listItem}>
              <p className={css.authorTitle}>Author: {rev.author}</p>
              <p>{rev.content}</p>
            </li>
          );
        })
      ) : (
        <p>Sorry, there are no reviews.</p>
      )}
    </div>
  );
};

export default MovieReviews;
