import { useEffect, useState } from 'react';
import FetchDetails from 'services/fetchDetails';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    FetchDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;
  const { title, vote_average, overview, genres, poster_path } = movie;

  return (
    <>
      <Link to={location.state?.from ?? '/movies'}>Go back</Link>

      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt="poster"
        />

        <div>
          <h2>{title}</h2>
          <p>Rating: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(item => {
              return (
                <li key={item.id}>
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;