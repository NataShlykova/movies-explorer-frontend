import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AutorisationForm.css';

function AutorisationForm({ name, title, onSubmit, buttonText, ...props }) {
  const [disabled, setDisabled] = React.useState(false);
  console.log(setDisabled);
  const navigate = useNavigate();

  return (
    <section className='form__box'>
      <Link className='form__link' to='/'></Link>
      <h1 className='form__title'>{title}</h1>
      <form
        id={`${name}`}
        className={`form form_${name}`}
        name={`${name}`}
        onSubmit={onSubmit}
      >
        {props.children}
        <button
          className={`form__button form__button_${name}`}
          form={`${name}`}
          disabled={disabled ? true : false}
          type='submit'
        >
          {buttonText}
        </button>
      </form>
      {name === 'register' ? (
        <p className='form__text'>
          Уже зарегистрированы?
          <button
            className='form_button_container'
            type='button'
            onClick={() => navigate('/signin')}
          >
            Войти
          </button>
        </p>
      ) : (
        <p className='form__text'>
          Ещё не зарегистрированы?
          <button
            className='form_button_container'
            type='button'
            onClick={() => navigate('/signup')}
          >
            Регистрация
          </button>
        </p>
      )}
    </section>
  );
}

export default AutorisationForm;
