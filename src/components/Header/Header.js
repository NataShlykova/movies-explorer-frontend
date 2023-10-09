import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
    const [login, setlogin] = useState(true)
    console.log(setlogin)

    
    return (
        <header className="header">
            <Link to='/' className='header__logo'></Link>
            {login ? <Navigation /> : (<div className='header__container'>
                <Link to='/' className='header__link'>Регистрация</Link>
                <Link to='/' className='header__link'>Войти</Link>
            </div>)}
        </header>
    );
}

export default Header;
