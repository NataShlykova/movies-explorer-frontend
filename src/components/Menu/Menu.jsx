import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu({ onClickClose, opened }) {
  const linkActive = 'menu__link menu__link_active';
  const link = 'menu__link';

  return (
    <div className={`overlay ${opened ? true : false}`}>
      <nav className={`menu ${opened ? 'menu__active' : ''}`}>
        <button type='button' className='menu__delete' onClick={onClickClose} />
        <ul className='menu__list'>
          <li className='menu__list-name'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/'
            >
              Главная
            </NavLink>
          </li>
          <li className='menu__list-name'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/movies'
            >
              Фильмы
            </NavLink>
          </li>
          <li className='menu__list-name'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/saved-movies'
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className='menu__account'>
          <NavLink className='menu__account-link' to='/profile'>
            <p className='menu__text'>Аккаунт</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
