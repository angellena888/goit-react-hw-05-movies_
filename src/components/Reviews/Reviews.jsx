import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchReviews from 'services/fetchReviews';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    FetchReviews(movieId).then(r => {
      setReview(r.results);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.map(review => {
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
            <p>Rating: {review.author_details.rating}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
