import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <div className='card'>
      <div className='card__context'>
        <button
          type='button'
          className={`card__like-button ${
            movie.isActive ? 'card__like-button_active' : ''
          }`}
        ></button>
        {/* <button
          type='button'
          className={`card__like-button ${
            movie.isDelete ? 'card__button_delete' : ''
          }`}
        ></button> */}
        <a
          href={movie.trailerLink}
          target='_blank'
          rel='noreferrer'
          className='card__link'
        >
          <img className='card__item' alt={movie.nameRU} src={movie.image} />
        </a>
      </div>

      <div className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>{movie.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
