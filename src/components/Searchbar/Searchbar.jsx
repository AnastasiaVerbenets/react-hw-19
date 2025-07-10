import { useState } from 'react';
import css from './Searchbar.module.css';
import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searchImg, setSearchImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImg.trim() === '') {
      toast.error('Write something to search');
      return;
    }

    onSubmit(searchImg);

    setSearchImg('');
  };

  const handleChange = e => {
    setSearchImg(e.target.value.toLowerCase());
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
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
