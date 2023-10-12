import React from 'react';
import './Login.css';
import AutorisationForm from '../AutorisationForm';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='login'>
      <AutorisationForm
        title='Рады видеть!'
        name='login'
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
            className='form__input'
            minLength='2'
            maxLength='40'
            id='email'
            required
            placeholder='pochta@yandex.ru'
          />
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
            placeholder='Пароль'
          />
        </fieldset>
      </AutorisationForm>
    </main>
  );
}

export default Login;
