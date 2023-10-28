import { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {
  setLocalStorage,
  getLocalStorage,
  getMovieCards,
  addMovieCards,
} from '../../utils/utils';
import { moviesApi } from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';

function Movies({
  login,
  setLoading,
  loading,
  onMovieSave,
  saveMovies,
  cardList,
  setCardList,
  handleMovieDelete,
  filter,
  setFilter,
  cardsLoading,
  setCardsLoading,
}) {
  const [movieFiltered, setMovieFiltered] = useState([]);
  const [addCardButton, setAddMovieButton] = useState(0);
  const [found, setFound] = useState(false);
  const [showMovieFiltered, setShowMovieFiltered] = useState(0);

  async function addCard(item) {
    setAddMovieButton(getMovieCards());
    setCardsLoading(true);
    let myMovie = getLocalStorage('myMovie');

    if (!myMovie || myMovie.length === 0) {
      const jwt = getLocalStorage('jwt');
      try {
        setLoading(true);
        myMovie = await moviesApi.getMovieInfo(jwt);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    const resultFilteredMovies = flteredMovie(item, myMovie);
    setMovieFiltered(resultFilteredMovies);
    setCardList(myMovie);
    setLocalStorage('itemSearch', item);
    setLocalStorage('myMovie', myMovie);
    resultFilteredMovies.length === 0 ? setFound(true) : setFound(false);
    setCardsLoading(false);
  }

  const flteredMovie = (item, cardList) => {
    const list = cardList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(item.toLowerCase());
    });
    return list;
  }

  const handleButton = () => {
    setAddMovieButton(addCardButton + addMovieCards());
  }

  useEffect(() => {
    const item = getLocalStorage('itemSearch');
    if (item) addCard(item);
  }, []);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm
          setFilter={setFilter}
          loading={loading}
          cardList={cardList}
          addCard={addCard}
          filter={filter}
        />
        <MoviesCardList
          movies={movieFiltered}
          handleMovieDelete={handleMovieDelete}
          filter={filter}
          cardsLoading={cardsLoading}
          addCardButton={addCardButton}
          setAddMovieButton={setAddMovieButton}
          onMovieSave={onMovieSave}
          saveMovies={saveMovies}
          setShowMovieFiltered={setShowMovieFiltered}
        />
        {showMovieFiltered > addCardButton ? (
          <button className='movies__button' onClick={handleButton}>
            Ещё
          </button>
        ) : (
          ''
        )}
        {found && (
          <span className='movies__absent'>«Ничего не найдено»</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
