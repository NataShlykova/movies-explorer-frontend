import React from 'react';
import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className='unknown'>
      <h1 className='unknown__title'>404</h1>
      <p className='unknown__text'>Страница не найдена</p>
      <Link className='unknown__link' onClick={() => navigate(-1)}>
        Назад
      </Link>
    </main>
  );
}

export default NotFoundPage;
