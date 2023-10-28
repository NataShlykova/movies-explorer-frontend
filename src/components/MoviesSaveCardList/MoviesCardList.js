import { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesSaveCard/MoviesCard';
import { SHORT } from '../../utils/constants';

function MoviesCardList({ handleMovieDelete, filter, movies }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChangeSize = (e) => {
      setWidth(e.target.innerWidth);
    };
    
    window.addEventListener('resize', handleChangeSize);
    return () => {
      window.removeEventListener('resize', handleChangeSize);
    };
  }, []);

  return (
    <section className='cardlist'>
      <ul className='cardlist__list'>
        {filter
          ? movies
              .filter((movie) => {
                return movie.duration < SHORT;
              })
              .slice(0, width)
              .map((movie) => (
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  handleMovieDelete={handleMovieDelete}
                  key={movie.id || movie._id}
                />
              ))
          : movies
              .slice(0, width)
              .map((movie) => (
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  handleMovieDelete={handleMovieDelete}
                  key={movie.id || movie._id}
                />
              ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
