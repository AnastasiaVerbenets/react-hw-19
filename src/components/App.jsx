import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const App = () => {
  const [searchImg, setSearchImg] = useState('');

  return (
    <div>
      <Searchbar onSubmit={setSearchImg} />
      <ImageGallery searchImg={searchImg} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
