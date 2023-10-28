import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AutorisationForm.css';

function AutorisationForm({
  onSubmit,
  buttonText,
  name,
  title,
  disabled,
  valid,
  isName,
  isPassword,
  ...props
}) {
  const navigate = useNavigate();

  return (
    <section className='form-box'>
      <Link className='form-box__link' to='/'></Link>
      <h1 className='form-box__title'>{title}</h1>
      <form
        id={`${name}`}
        className={`form form_${name}`}
        name={`${name}`}
        onSubmit={onSubmit}
      >
        {props.children}
        <button
          className={
            disabled
              ? `form__button form__button_disabled form__button_${name}_disabled`
              : `form__button form__button_${name}`
          }
          form={`${name}`}
          disabled={disabled ? true : false}
          type='submit'
        >
          {buttonText}
        </button>
      </form>
      {name === 'register' ? (
        <p className='form-box__text'>
          Уже зарегистрированы?
          <button
            className='form-box__button'
            type='button'
            onClick={() => navigate('/signin')}
          >
            Войти
          </button>
        </p>
      ) : (
        <p className='form-box__text'>
          Ещё не зарегистрированы?
          <button
            className='form-box__button'
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
