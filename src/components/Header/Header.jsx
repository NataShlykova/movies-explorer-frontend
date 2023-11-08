import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ login }) {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'></Link>
      {login ? (
        <Navigation />
      ) : (
        <nav>
          <ul className='header__container'>
            <li>
              <Link to='/signup' className='header__link'>
                Регистрация
              </Link>
            </li>
            <li>
              <Link to='/signin' className='header__link header__link_active'>
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
