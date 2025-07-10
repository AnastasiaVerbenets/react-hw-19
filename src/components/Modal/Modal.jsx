import { useEffect } from 'react';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) onClose();
  }

  return (
    <div onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
