import { useEffect, useState } from 'react';
import css from './ImageGallery.module.css';
import { fetchImgs } from 'services/getPixabayApi';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export const ImageGallery = ({ searchImg }) => {
  const [imgs, setImgs] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  useEffect(() => setPage(1), [searchImg]);

  useEffect(() => {
    if (!searchImg) return;

    setStatus('pending');

    fetchImgs
      .fetchImgs(searchImg, page)
      .then(imgs => {
        setImgs(prevState => {
          return page > 1 ? [...prevState, ...imgs.hits] : imgs.hits;
        });
        if (page === 1) setTotalPage(Math.ceil(imgs.totalHits / 12));

        setStatus('resolved');

        if (!imgs.hits.length) {
          setImgs([]);
          setStatus('rejected');
          toast.error(`Sorry, ${searchImg} not found`);
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchImg, page]);

  function onLoadMore() {
    setPage(prevState => prevState + 1);
  }

  function toggleModal(img) {
    setShowModal(!showModal);
    setLargeImg(img);
  }

  return (
    <>
      {status === 'rejected' && <h1>{error}</h1>}
      <ul className={css.ImageGallery}>
        {imgs.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClickModal={() => toggleModal(largeImageURL)}
          />
        ))}
      </ul>

      {status === 'pending' && <Loader />}
      {page !== totalPage && status === 'resolved' && (
        <Button onLoadMore={onLoadMore} />
      )}

      {showModal && (
        <Modal>
          <img src={largeImg} alt="" />
        </Modal>
      )}
    </>
  );
};
