import { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { getLocalStorage } from '../../utils/utils';
import useForm from '../../hooks/form';

function SearchForm({ setFilter, loading, addCard, filter }) {
  const [textShow, setTextShow] = useState(false);
  const { setValues, setValid, values, handleChange } = useForm();

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    if (values.name) {
      addCard(values.name);
    } else {
      setTextShow(true);
    }
  }

  useEffect(() => {
    setValues({ name: getLocalStorage('itemSearch') });
    
    if (values.name) {
      setValid(true);
    }
  }, []);

  return (
    <div className='search'>
      <form className='search__form' name='search'>
        <input
          className='search__input'
          placeholder='Фильм'
          minLength='1'
          name='name'
          type='search'
          required
          value={values.name || ''}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          onClick={handleButtonSubmit}
          type='submit'
          className='search__button'
        ></button>
      </form>
      {textShow && (
        <span className='search__span'>Нужно ввести ключевое слово</span>
      )}
      <div className='search__checkbox'>
        <FilterCheckbox setFilter={setFilter} filter={filter} />
        <label htmlFor='checkbox' className='search__span-checkbox'>Короткометражки</label>
      </div>
    </div>
  );
}

export default SearchForm;
