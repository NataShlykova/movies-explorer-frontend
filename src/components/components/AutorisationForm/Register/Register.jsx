import React from 'react';
import './Register.css';
import AutorisationForm from '../AutorisationForm';

function Register() {
  // useState для проверки текста ошибки
  const [isActiveError, setIsActiveError] = React.useState(true);

  console.log(setIsActiveError);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='register'>
      <AutorisationForm
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        buttonText='Зарегистрироваться'
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='name'>
            Имя
          </label>
          <input
            name='name'
            type='text'
            className='form__input focus'
            minLength='2'
            maxLength='40'
            id='name'
            required
            placeholder='Виталий'
          />
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='email'>
            E-mail
          </label>
          <input
            name='email'
            type='email'
            className='form__input focus'
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
            className='form__input form__input_error'
            minLength='6'
            maxLength='100'
            id='password'
            required
            placeholder='Пароль'
          />
          <span
            id='name-error'
            className={`form__error ${
              isActiveError ? 'form__error_visible' : ''
            } `}
          >
            Что-то пошло не так...
          </span>
        </fieldset>
      </AutorisationForm>
    </main>
  );
}
export default Register;
