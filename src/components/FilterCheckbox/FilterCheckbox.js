import React from 'react';
import './FilterCheckbox.css';
import { setLocalStorage } from '../../utils/utils';

function FilterCheckbox({ filter, setFilter }) {

  const handleButton = (event) => {
    setFilter(event.target.checked);
    setLocalStorage('checked', event.target.checked);
  }

  return (
    <div className='filter'>
      <input
        className='filter__input'
        type='checkbox'
        id='checkbox'
        checked={filter}
        value={undefined}
        onChange={handleButton}
      />
      <label className='filter__label' htmlFor='filter' />
    </div>
  );
}

export default FilterCheckbox;
