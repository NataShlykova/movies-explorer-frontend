import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Devider from '../Devider/Devider';

function SavedMovies() {
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(setIsLoading);

  const movies = [
    {
      movieId: 1,
      nameRU: '33 слова о дизайне',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/kH15c8d/1.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 2,
      nameRU: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/bX41cYx/2.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
      isDelete: true,
    },
    {
      movieId: 3,
      nameRU: 'В погоне за Бенкси',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/Bqyy2Mw/3.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
  ];

  return (
    <main className='movies'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <SearchForm />
          <MoviesCardList movies={movies} />
          <Devider />
          <Footer />
        </>
      )}
    </main>
  );
}

export default SavedMovies;
