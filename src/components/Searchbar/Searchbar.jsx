// import { useState } from 'react';
import css from './Searchbar.module.css';
import { IoIosSearch } from 'react-icons/io';

const Searchbar = () => {
  // const [value, setValue] = useState('');

  const handleSubmit = e => {};

  const handleChange = e => {
    // setValue(e.target.value);
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <IoIosSearch className={css.IconButton} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={css.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
