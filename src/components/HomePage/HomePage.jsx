import { useEffect, useState } from 'react';
import FetchTrending from 'services/FetchTrending';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      const fetch = FetchTrending();
      fetch.then(r => {
        setMovies(r);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <ul className={css.movie_list}>
        {movies.map(item => (
          <li key={item.id} className={css.movie_li}>
            <Link
              to={`movies/${item.id}`}
              state={{ from: location }}
              className={css.movie_link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default HomePage;