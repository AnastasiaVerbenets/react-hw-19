import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
