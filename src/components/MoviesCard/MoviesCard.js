import { useEffect, useState } from 'react';
import './MoviesCard.css';
import { changeMinToHour } from '../../utils/utils';

function MoviesCard({ movie, saveMovies, handleMovieDelete, onMovieSave }) {
  const [like, setLike] = useState(
    saveMovies.some((card) => {
      if (card.nameRU === movie.nameRU) {
      }
      return card.nameRU === movie.nameRU;
    })
  );

  const handleClickLike = () => {
    if (like) {
      const id = saveMovies.filter((card) => {
        if (card.nameRU === movie.nameRU) {
        }
        return card.nameRU === movie.nameRU;
      })[0]._id;
      handleMovieDelete(id);
    } else {
      onMovieSave(movie);
    }
  }

  useEffect(() => {
    setLike(saveMovies.some((card) => card.nameRU === movie.nameRU));
  }, [saveMovies]);


  return (
    <div className='card'>
      <div className='card__context'>
        <button
          type='button'
          onClick={handleClickLike}
          className={`card__like-button ${
            like ? 'card__like-button_active' : ''
          }`}
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
            src={'https://api.nomoreparties.co/' + movie.image.url}
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

export default MoviesCard;
