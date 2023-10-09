import React from 'react';
import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className='unknown'>
      <p className='unknown__title'>404</p>
      <p className='unknown__text'>Страница не найдена</p>
      <Link className='unknown__link' onClick={() => navigate(-1)}>
        Назад
      </Link>
    </section>
  );
}

export default NotFoundPage;
