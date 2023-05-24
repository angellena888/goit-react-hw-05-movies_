import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchActors from 'services/fetchActors';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    FetchActors(movieId).then(r => {
      setActors(r.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.cast_list}>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              alt={css.actor}
              className={css.actor_image}
            />
            <div>
              <h3 className={css.actor_name}>{actor.name}</h3>
              <p className={css.character_name}>Character: {actor.character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;