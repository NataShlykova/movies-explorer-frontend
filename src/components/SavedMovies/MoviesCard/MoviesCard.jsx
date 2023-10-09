import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <div className='card'>
      <div className='card__context'>
        <button
          type='button'
          className={`card__button_delete ${
            movie.isDelete ? 'card__button_delete' : ''
          }`}
        ></button>
        <img className='card__item' alt={movie.nameRU} src={movie.image} />
      </div>
      <div className='card__container'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        <p className='card__duration'>{movie.duration}</p>
      </div>
    </div>
  );
}
export default MoviesCard;
