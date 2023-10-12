import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';

function Navigation() {
  const linkActive = 'navigation__link navigation__link_active';
  const link = 'navigation__link';
  const [opened, setOpened] = useState(false);

  return (
    <nav className='navigation'>
      <div className='navigation__movies'>
        <NavLink
          to='/movies'
          className={({ isActive }) => (isActive ? linkActive : link)}
        >
          Фильмы
        </NavLink>

        <NavLink
          to='/saved-movies'
          className={({ isActive }) => (isActive ? linkActive : link)}
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <Link to='/profile' className='navigation__profile'>
        <div className='navigation__account'>Аккаунт</div>
      </Link>
      <div className='navigation__lines'>
        <div
          role='button'
          className='navigation__button'
          onClick={() => {
            setOpened(true);
          }}
        >
          <div className='navigation__line'></div>
          <div className='navigation__line'></div>
          <div className='navigation__line'></div>
        </div>
      </div>
      {opened && <Menu onClickClose={() => setOpened(false)} />}
    </nav>
  );
}

export default Navigation;
