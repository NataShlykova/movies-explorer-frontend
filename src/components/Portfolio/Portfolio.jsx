import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li className='portfolio__links'>
          <Link
            to='https://github.com/NataShlykova/how-to-learn'
            className='portfolio__link'
            
            target='_blank'
          >
            Статичный сайт
            <div className='portfolio__image' />
          </Link>
        </li>
        <li className='portfolio__links'>
          <Link
            className='portfolio__link'
            to='https://github.com/NataShlykova/russian-travel'
            target='_blank'
          >
            Адаптивный сайт
            <div className='portfolio__image' />
          </Link>
        </li>
        <li className='portfolio__links'>
          <Link
            className='portfolio__link'
            to='https://domainname.students.nomoredomainsicu.ru'
            target='_blank'
          >
            Одностраничное приложение
            <div className='portfolio__image' />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
