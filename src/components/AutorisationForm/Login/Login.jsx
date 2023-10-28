import React from 'react';
import './Login.css';
import AutorisationForm from '../AutorisationForm';
import { Navigate } from 'react-router-dom';
import useForm from '../../../hooks/form';

function Login({ login, onLogin, onLoading }) {
  const { valid, values, handleChange, error  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return login ? (
      <Navigate to='/' replace />
    ) : (
    <main className='login'>
      <AutorisationForm
        title='Рады видеть!'
        name='login'
        valid={valid}
        isDisable={!valid}
        onSubmit={handleSubmit}
        buttonText='Войти'
      >
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
            className='form__input'
            minLength='6'
            maxLength='100'
            id='password'
            required
            onChange={handleChange}
            value={values.password || ''}
            autoComplete='off'
            disabled={onLoading ? true : false}
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

export default Login;