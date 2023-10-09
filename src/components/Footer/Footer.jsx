import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__year'>&#169; {new Date().getFullYear()}</p>
        <div className='footer__box'>
          <Link
            href='https://practicum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </Link>
          <Link
            href='https://github.com/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
