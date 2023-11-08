import React from 'react';
import './Register.css';
import AutorisationForm from '../AutorisationForm';
import { Navigate } from 'react-router-dom';
import useForm from '../../../hooks/form';

function Register({ login, onRegister, onLoading }) {
  const { valid, error, values, handleChange } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return login ? (
    <Navigate to='/' replace />
  ) : (
    <main className='register'>
      <AutorisationForm
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        valid={valid}
        isDisable={!valid}
        buttonText='Зарегистрироваться'
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='name'>
            Имя
          </label>
          <input
            name='name'
            type='text'
            className={`form__input ${error.name ? 'form__input_error' : ''}`}
            minLength='2'
            maxLength='40'
            id='name'
            required
            onChange={handleChange}
            value={values.name || ''}
            autoComplete='off'
            disabled={onLoading ? true : false}
            placeholder='Имя'
          />
          <span
            id='password-name'
            className={`form__error ${error.name ? 'form__error_visible' : ''}`}
          >
            {error.name || ''}
          </span>
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='email'>
            E-mail
          </label>
          <input
            name='email'
            type='email'
            className={`form__input ${error.email ? 'form__input_error' : ''}`}
            minLength='2'
            maxLength='40'
            id='email'
            required
            onChange={handleChange}
            value={values.email || ''}
            autoComplete='off'
            disabled={onLoading ? true : false}
            placeholder='pochta@yandex.ru'
          />
          <span
            id='email-error'
            className={`form__error ${
              error.email ? 'form__error_visible' : ''
            }`}
          >
            {error.email || ''}
          </span>
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='password'>
            Пароль
          </label>
          <input
            name='password'
            type='password'
            className={`form__input ${
              error.password ? 'form__input_error' : ''
            }`}
            minLength='6'
            maxLength='100'
            id='password'
            required
            onChange={handleChange}
            value={values.password || ''}
            disabled={onLoading ? true : false}
            autoComplete='off'
            placeholder='Пароль'
          />
          <span
            id='password-error'
            className={`form__error ${
              error.password ? 'form__error_visible' : ''
            }`}
          >
            {error.password || ''}
          </span>
        </fieldset>
      </AutorisationForm>
    </main>
  );
}
export default Register;
