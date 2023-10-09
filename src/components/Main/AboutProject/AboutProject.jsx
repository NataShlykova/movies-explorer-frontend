import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id='project'>
      <h1 className='project__name'>О проекте</h1>
      <div className='project__container'>
        <div className='project__box'>
          <h2 className='project__title'>Дипломный проект включал 5 этапов</h2>
          <p className='project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            <br />
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__week'>
          <h2 className='project__title'>
            На выполнение диплома ушло 5 недель
          </h2>
          <p className='project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            <br />
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__line'>
        <p className='project__one'>1 неделя</p>
        <p className='project__four'>4 недели</p>
      </div>
      <div className='project__context'>
        <p className='project__backend'>Back-end</p>
        <p className='project__frontend'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
