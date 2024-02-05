import { ImageCard } from '../ImageCard/ImageCard';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';
import { useState } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export const ImageGallery = ({ items }) => {
  let image = items.map(item => {
    return item.urls.regular;
  });
  const [state, setState] = useState(false);

  const handleOpenModal = () => {
    setState(true);
  };

  const handleCloseModal = () => {
    setState(false);
  };

  return (
    <div>
      <ul className={css.container}>
        {items.map(item => {
          return (
            <li className={css.list} key={item.id}>
              <ImageCard items={item} isOpen={handleOpenModal} />
            </li>
          );
        })}
      </ul>
      <ImageModal src={image} closetModal={handleCloseModal} value={state} />;
    </div>
  );
};
