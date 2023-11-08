import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../AutorisationForm/Login/Login';
import Register from '../AutorisationForm/Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as auth from '../../utils/auth.js';
import { getLocalStorage, setLocalStorage } from '../../utils/utils';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation();
  const url = location.pathname;
  const [saveMovies, setSaveMovies] = useState(
    getLocalStorage('saveMovies') || []
  );
  const [cardsLoading, setCardsLoading] = useState(false);
  const [notification, setNotification] = useState(true);
  const [cardList, setCardList] = useState(getLocalStorage('myMovie') || []);
  const [filterSaveMovie, setFilterSaveMovie] = useState([]);
  const [filter, setFilter] = useState(
    false || getLocalStorage('checked')
  );
  const [found, setFound] = useState(false);

  useEffect(() => {
    const token = getLocalStorage('jwt');
    if (token) {
      setCardsLoading(true);
      
      auth
        .checkToken(token)
        .then(() => {
          setLogin(true);
          navigate(url, { replace: true });
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setCardsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    const jwt = getLocalStorage('jwt');
    if (login) {

      mainApi
        .getUserInfo(jwt)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.log(`Что-то пошло не так...(${error})`);
        });
      mainApi
        .getSaveMovies(jwt)
        .then((data) => {
          setSaveMovies(data);
          localStorage.setItem('movieSaved', JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [login]);

  function handleLogin({ email, password }) {
    setCardsLoading(true);
    setLoading(true);

    auth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          setLocalStorage('jwt', data.token);
          setLogin(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setSuccess(false);
        setPopupOpen(true);
        setNotification('Ошибка авторизации');
      })
      .finally(() => {
        setCardsLoading(false);
        setLoading(false);
      });
  };

  function handleRegistration({ name, email, password }) {
    setLoading(true);

    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((e) => {
        console.error(e);
        setSuccess(false);
        setPopupOpen(true);
        setNotification('Ошибка регистрации');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function handleMovieDelete(id) {
    const jwt = getLocalStorage('jwt');

    mainApi
      .deleteCard(id, jwt)
      .then(() => {
        const changedCardList = saveMovies.filter((card) => card._id !== id);
        setSaveMovies(changedCardList);
        setFilterSaveMovie(
          filterSaveMovie.filter((card) => card._id !== id)
        );
        setLocalStorage('movieSaved', changedCardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSignOut() {
    localStorage.clear();
    navigate('/', { replace: true });
    setLogin(false);
    window.location.reload();
  }

  function handleUpdateUser(userData) {
    const jwt = getLocalStorage('jwt');
    setLoading(true);

    mainApi
      .setUserInfo(userData, jwt)
      .then(() => {
        setCurrentUser({
          currentUser,
          name: userData.name,
          email: userData.email,
        });
        setSuccess(true);
        setPopupOpen(true);
        setNotification('Данные успешно изменены');
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setPopupOpen(true);
        setNotification('При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function handleSaveMovie(cardData) {
    const jwt = getLocalStorage('jwt');

    mainApi
      .saveMovies(cardData, jwt)
      .then((res) => {
        setSaveMovies([...saveMovies, res]);
        setLocalStorage('movieSaved', [...saveMovies, res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header login={login} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                success={success}
                signout={handleSignOut}
                loading={loading}
                login={login}
                updateUser={handleUpdateUser}
              />
            }
          />
          <Route
            path='/signin'
            element={<Login login={login} onLogin={handleLogin} />}
          />
          <Route
            path='/signup'
            element={<Register login={login} onRegister={handleRegistration} />}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                login={login}
                setLoading={setLoading}
                loading={loading}
                setCardsLoading={setCardsLoading}
                handleMovieDelete={handleMovieDelete}
                filter={filter}
                saveMovies={saveMovies}
                setFilter={setFilter}
                cardsLoading={cardsLoading}
                onMovieSave={handleSaveMovie}
                cardList={cardList}
                setCardList={setCardList}
                found={found}
                setFound={setFound}
              ></ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                login={login}
                filterSaveMovie={filterSaveMovie}
                setFilterSaveMovie={setFilterSaveMovie}
                handleMovieDelete={handleMovieDelete}
                setCardsLoading={setCardsLoading}
                found={found}
                setFound={setFound}
              ></ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <InfoTooltip
          isOpen={popupOpen}
          name='note'
          notification={notification}
          setPopupOpened={setPopupOpen}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
