import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} alt="img" />
    </li>
  );
};

export default ImageGalleryItem;
