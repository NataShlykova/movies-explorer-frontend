import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/form';

function Profile() {
  const [edit, setEdit] = React.useState(false);
  const navigate = useNavigate();
  const { values, valid, handleChange, error } = useForm();
  // const [isSuccess, setIsSuccess] = React.useState(true);
  // console.log(setIsSuccess);

  function handleEdit() {
    setEdit(!edit);
  }

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__section'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form' onSubmit={submitForm} name='account'>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label className='profile__name' htmlFor='name'>
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
                disabled={edit ? false : true}
                value={values.name || ''}
              />
            </fieldset>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label className='profile__name' htmlFor='email'>
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
                disabled={edit ? false : true}
                onChange={handleChange}
                value={values.email || ''}
              />
            </fieldset>
            {/* {isSuccess && (
              <span className='profile__success'>Данные успешно изменены</span>
            )} */}
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
            {edit && (
              <button
                className='profile__form_save'
                type='submit'
                disabled={valid ? false : true}
              >
                Сохранить
              </button>
            )}
          </form>
          {edit ? (
            ''
          ) : (
            <>
              <button
                type='button'
                className='profile__form-edit'
                onClick={handleEdit}
              >
                Редактировать
              </button>
              <button
                className='profile__form-exit'
                onClick={() => navigate('/')}
                type='button'
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
