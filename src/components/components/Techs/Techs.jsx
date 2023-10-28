import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__name'>Технологии</h2>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__context'>
        На курсе веб-разработки мы освоили технологии, которые применили
        <br /> в дипломном проекте.
      </p>
      <ul className='techs__container'>
        <li className='techs__span'>HTML</li>
        <li className='techs__span'>CSS</li>
        <li className='techs__span'>JS</li>
        <li className='techs__span'>React</li>
        <li className='techs__span'>Git</li>
        <li className='techs__span'>Express.js</li>
        <li className='techs__span'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
