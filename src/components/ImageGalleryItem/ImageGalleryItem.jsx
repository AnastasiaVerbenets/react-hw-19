import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onClickModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        alt={tags}
        src={webformatURL}
        onClick={onClickModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
