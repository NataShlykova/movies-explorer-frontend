import React from 'react';
import '../MoviesCard/MoviesCard.css';
import { changeMinToHour } from '../../utils/utils';

function MoviesSaveCard({ movie, handleMovieDelete }) {

  function handleDelete() {
    handleMovieDelete(movie._id);
  }

  return (
    <div className='card'>
      <div className='card__context'>
        <button
          type='button'
          className='card__button_delete'
          onClick={handleDelete}
        ></button>
        <a
          href={movie.trailerLink}
          target='_blank'
          rel='noreferrer'
          className='card__link'
        >
          <img
            className='card__item'
            alt={movie.nameRU}
            src={movie.image}
          />
        </a>
      </div>
      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>{changeMinToHour(movie.duration)}</p>
      </div>
    </div>
  );
}
export default MoviesSaveCard;
