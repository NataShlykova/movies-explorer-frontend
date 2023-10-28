import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  console.log(setButtonDisabled);

  return (
    <div className='search'>
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
        <label for='checkbox' className='search__span-checkbox'>Короткометражки</label>
      </div>
    </div>
  );
}

export default SearchForm;
