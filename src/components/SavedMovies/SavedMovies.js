import { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesSaveCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Devider from '../Devider/Devider';
import { mainApi } from '../../utils/MainApi';
import { getLocalStorage } from '../../utils/utils';

function SavedMovies({
  login,
  filterSaveMovie,
  handleMovieDelete,
  setFilterSaveMovie,
  setCardsLoading,
  found,
  setFound
}) {
  const [filter, setFilter] = useState(false);

  async function addCard(item) {
    setCardsLoading(true);
    let movieSaved = getLocalStorage('movieSaved');

    if (!movieSaved) {
      const jwt = getLocalStorage('jwt');
      movieSaved = await mainApi.getSaveMovies(jwt);
    }

    const resultFilteredMovies = flteredMovie(item, movieSaved);
    setFilterSaveMovie(resultFilteredMovies.reverse());
    resultFilteredMovies.length === 0 ? setFound(true) : setFound(false);
    setCardsLoading(false);
  }

  const flteredMovie = (item, cardList) => {
    const list = cardList?.length
      ? cardList.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(item.toLowerCase());
        })
      : [];
    return list;
  };

  useEffect(() => {
    addCard('');
  }, []);

  return (
    <main className='movies'>
      <>
        <Header login={login} />
        <SearchForm filter={filter} setFilter={setFilter} addCard={addCard} />
        <MoviesCardList
          handleMovieDelete={handleMovieDelete}
          movies={filterSaveMovie}
          filter={filter}
          setFound={setFound}
        />
        {found && <span className='movies__absent'>«Ничего не найдено»</span>}
        <Devider />
        <Footer />
      </>
    </main>
  );
}

export default SavedMovies;
