import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const movies = [
    {
      movieId: 1,
      nameRU: '33 слова о дизайне',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/kH15c8d/1.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
      isSave: true,
    },
    {
      movieId: 2,
      nameRU: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/bX41cYx/2.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
      isActive: true,
    },
    {
      movieId: 3,
      nameRU: 'В погоне за Бенкси',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/Bqyy2Mw/3.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 4,
      nameRU: 'Баския: Взрыв реальности',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/Yp395Vf/4.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 5,
      nameRU: 'Бег это свобода',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/PQFBX21/5.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 6,
      nameRU: 'Книготорговцы',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/hfwTHQS/6.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
      isActive: true,
    },
    {
      movieId: 7,
      nameRU: 'Когда я думаю о Германии ночью',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/YbnGNx1/7.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 8,
      nameRU: 'Gimme Danger: История Игги и The Stooges',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/HNBHfB9/8.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 9,
      nameRU: 'Дженис: Маленькая девочка грустит',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/NxR67tx/9.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 10,
      nameRU: 'Соберись перед прыжком',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/HtfbXj4/10.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 11,
      nameRU: 'Пи Джей Харви: A dog called money',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/gwqQ3XH/11.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
    {
      movieId: 12,
      nameRU: 'По волнам: Искусство звука в кино',
      duration: '1ч 17м',
      image: 'https://i.ibb.co/KhqgpbS/12.jpg',
      trailerLink: 'https://youtu.be/3WaA4oH-5R4',
    },
  ];

  const [isLoading, setIsLoading] = React.useState(false);
  console.log(setIsLoading);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main className='movies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className='movies__button'>Ещё</button>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movies;
