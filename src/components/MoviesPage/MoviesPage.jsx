import FetchSearchByKeyword from 'services/fetchSearchByKeyword';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    FetchSearchByKeyword(searchQuery).then(r => {
      setMovies(r.results);
    });
  }, [searchQuery]);

  const handleChange = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={searchQuery} />
      <div>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default MoviesPage;