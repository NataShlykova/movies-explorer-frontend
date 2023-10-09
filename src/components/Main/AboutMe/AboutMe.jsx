import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className='student' id='me'>
      <p className='student__name'>Студент</p>
      <div className='student__container'>
        <div className='student__box'>
          <h2 className='student__title'>Виталий</h2>
          <p className='student__text'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__context'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена
            <br /> и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С<br /> 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-
            <br />
            разработке, начал заниматься фриланс-заказами и ушёл с постоянной
            работы.
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

        <div className='student__foto'></div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
