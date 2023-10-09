import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <div className='navigation__movies'>
                <Link className='navigation__link' to='/movies'>Фильмы</Link>
                <Link className='navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
            </div>
            <Link to='/profile' className='navigation__profile'>
                {/* <p className='profile__account'>Аккаунт</p> */}
                <div className='profile__icon'></div>

            </Link>
        </nav>
    );
}

export default Navigation;