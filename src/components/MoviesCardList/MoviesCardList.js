import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getMovieCards } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';
import { SHORT } from '../../utils/constants';

function MoviesCardList({
  movies,
  handleMovieDelete,
  onMovieSave,
  saveMovies,
  filter,
  cardsLoading,
  addCardButton,
  movie,
  setAddMovieButton,
  setShowMovieFiltered,
}) {
  const [showMovies, setShowMovies] = useState([]);

  useEffect(() => {
    const showNewMovie = filter
      ? movies
          .filter((movie) => {
            return movie.duration < SHORT;
          })
          .slice(0, addCardButton)
      : movies.slice(0, addCardButton);
    setShowMovies(showNewMovie);
  }, [movies, filter, addCardButton]);

  useEffect(() => {
    const filteredMovies = filter
      ? movies.filter((movie) => {
          return movie.duration < SHORT;
        }).length
      : movies.length;
    setShowMovieFiltered(filteredMovies);
  }, [movies, filter, addCardButton]);

  useEffect(() => {
    setAddMovieButton(getMovieCards());
    function handleChangeSize() {
      setAddMovieButton(getMovieCards());
    };
    handleChangeSize();
    window.addEventListener('screen', handleChangeSize);
    return () => {
      window.removeEventListener('screen', handleChangeSize);
    };
  }, []);

  useEffect(() => {
    setAddMovieButton(getMovieCards());
  }, [filter]);

  return (
    <>
      {cardsLoading ? (
        <Preloader />
      ) : (
        <section className='cardlist'>
          <ul className='cardlist__list'>
            {showMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                movies={movies}
                key={movie.id}
                onMovieSave={onMovieSave}
                saveMovies={saveMovies}
                handleMovieDelete={handleMovieDelete}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
