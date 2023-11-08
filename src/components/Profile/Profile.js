import { useEffect, useContext, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/form';

function Profile({
  loading,
  errorApi,
  login,
  updateUser,
  signout,
  success,
}) {
  const [failMsg, setFailMsg] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const { values, valid, handleChange, setValues, setValid, error } = useForm();

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setValid(true);
    }
  }, [currentUser, setValid, setValues]);

  useEffect(() => {
    if (success) {
      setFailMsg(false);
      setSuccessMsg(true);
    }
  }, [success, errorApi]);

  function handleButtonEdit(event) {
    event.preventDefault();
    setFailMsg(true);
    setSuccessMsg(false);
  }

  function submitForm(event) {
    event.preventDefault();
    updateUser(values);
  }

  return (
    <>
      <Header login={login} />
      <main className='profile'>
        <section className='profile__section'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <form className='profile__form' onSubmit={submitForm} name='account'>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label htmlFor='name' className='profile__name'>
                Имя
              </label>
              <input
                className={`profile__input ${
                  error.name ? 'profile__user_error' : ''
                }`}
                name='name'
                type='text'
                id='name'
                minLength='2'
                maxLength='40'
                required
                placeholder='Виталий'
                onChange={handleChange}
                disabled={!failMsg}
                value={values.name || ''}
              />
            </fieldset>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label htmlFor='email' className='profile__name'>
                E-mail
              </label>
              <input
                className={`profile__input ${
                  error.name ? 'profile__user_error' : ''
                }`}
                name='email'
                type='email'
                id='email'
                minLength='6'
                maxLength='40'
                required
                placeholder='pochta@yandex.ru'
                disabled={!failMsg}
                onChange={handleChange}
                value={values.email || ''}
              />
            </fieldset>
            {successMsg && (
              <span className='profile__success'>Данные успешно изменены</span>
            )}
            {/* {!valid ? (
              <>
                {edit ? (
                  <span id='name-error' className='profile__error_active'>
                    При обновлении профиля произошла ошибка.
                  </span>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )} */}
            {failMsg ? (
              <button
                className='profile__form_save'
                disabled={
                  !valid ||
                  (values.name === currentUser.name &&
                    values.email === currentUser.email) ||
                  loading
                }
                type='submit'
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type='button'
                  className='profile__form-edit'
                  onClick={handleButtonEdit}
                >
                  Редактировать
                </button>
                <button
                  className='profile__form-exit'
                  onClick={signout}
                  type='button'
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
