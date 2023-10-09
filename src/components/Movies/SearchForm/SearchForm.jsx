import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  console.log(setButtonDisabled);

  return (
    <section className='search'>
      <form className='search__form' name='search'>
        <input
          className='search__input'
          placeholder='Фильм'
          type='search'
          required
        />
        <button
          disabled={buttonDisabled ? true : false}
          type='submit'
          className='search__button'
        ></button>
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox />
        <span className='search__span-checkbox'>Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
