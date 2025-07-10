import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  <div className={css.loader}>
    <ThreeDots color="blue" height={50} width={50} ariaLabel="loading" />
  </div>;
};

export default Loader;
