import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import picture from '../../images/picture.jpg';

function AboutMe() {
  return (
    <section className='student' id='me'>
      <h2 className='student__name'>Студент</h2>
      <div className='student__container'>
        <div className='student__box'>
          <h3 className='student__title'>Виталий</h3>
          <p className='student__text'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__context'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='student__github'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/NataShlykova/'
          >
            Github
          </a>
        </div>
        <img
          src={picture}
          alt='Фотография студента'
          className='student__foto'
        ></img>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
