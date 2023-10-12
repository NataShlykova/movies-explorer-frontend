import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='navtab'>
      <ul className='navtab__box'>
        <li className='navtab__item'>
          <a href='#project' className='navtab__button'>
            О проекте
          </a>
        </li>
        <li className='navtab__item'>
          <a href='#techs' className='navtab__button'>
            Технологии
          </a>
        </li>
        <li className='navtab__item'>
          <a href='#me' className='navtab__button'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
